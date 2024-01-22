import { Controller, Get } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as iconv from 'iconv-lite';

@Controller('stock')
export class StockController {

    @Get('allGetStockList')
    allGetStockList() {

    }

    @Get('getStock')
    getStock() {

    }

    @Get('setStock')
    setStock() {

    }

    @Get('getStockCSVData')
    async getStockCSVData() {
        const csvBuffer  = readFileSync('src/resource/data_5813_20240110.csv');
        const csvFile = iconv.decode(csvBuffer , 'euc-kr');
    
        const lines = csvFile.split('\n');
        lines.shift();
        const result = [];
        for (const line of lines) {
          const row = line.split('","');
          //row.shift();
          //row.pop();
    
          for (let i = 0; i < row.length; i++) {
            row[i] = row[i].replace(/"/g, ''); // 모든 쌍따옴표 삭제
          }
    
          
          result.push(row);
          //result.push([…row, year]);
        }
      }

    

    

    
}
