import { Body, Controller, Get, Post } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as iconv from 'iconv-lite';
import { StockService } from './stock.service';
import { CreateStockDto } from './dtos/create-stock.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Controller('stock')
export class StockController {
    constructor(private stockService: StockService) {}

    @Get('allGetStockList')
    allGetStockList() {

    }

    @Get('getStock')
    getStock() {
      console.log(123);
    }

    @Get('getStockCSVData')
    async getStockCSVData() {
        const csvBuffer  = readFileSync('src/resource/stockList.csv');
        const csvFile = iconv.decode(csvBuffer , 'euc-kr');
    
        const lines = csvFile.split('\n');
        lines.shift();
        const result = [];
        for (const line of lines) {
          const row = line.split(',');
          //row.shift();
          //row.pop();
    
          for (let i = 0; i < row.length; i++) {
            row[i] = row[i].replace(/"/g, ''); // 모든 쌍따옴표 삭제
          }
    
          
          result.push(row);
          //result.push([…row, year]);
        }

        const batchSize = 100; // You can adjust the batch size as needed
        const totalRows = result.length;
        let successCount = 0;

        for (let i = 0; i < totalRows; i += batchSize) {
          const batch = result.slice(i, i + batchSize);
          const entities = batch.map((row) => {
            const createDto = plainToClass(CreateStockDto, {
              stockCode: row[0],
              stockName: row[1],
              marketType: row[2], // Map other properties similarly
              mainAffiliation: row[3],
              subAffiliation: row[4],
              stockCategoryCode: row[5],
              stockCategoryName: row[6],
              reportingMonth: +row[7], // Convert to number using the + operator
              advisee: row[8],
              outstandingShares: +row[9], // Convert to number using the + operator
              parValue: +row[10], // Convert to number using the + operator
              capital: row[11], // Convert to number using the + operator
              currencyType: row[12],
              ceo: row[13],
              tel: row[14],
              address: row[15],
            });

            try {
              const data = this.stockService.createStock(createDto);
              successCount += 1;

              console.log(successCount);
            } catch (error) {
              console.error(`Error inserting data for stockCode ${createDto.stockCode}:`, error);
              console.error(`성공카운트 : ${successCount}`);
              console.error('배치 처리 중 오류 발생:', error);
            } 
            return `데이터 삽입이 ${successCount}개 행에 대해 성공적으로 완료되었습니다.`;
          });
        }
      }
}
