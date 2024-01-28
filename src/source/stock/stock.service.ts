import { Body, Inject, Injectable } from '@nestjs/common';
import { Stock } from './entities/stock.entity/stock.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStockDto } from './dtos/create-stock.dto';

@Injectable()
export class StockService {
    
    constructor(
        @InjectRepository(Stock)
        private readonly stockRepository: Repository<Stock>,
      ) {}
    

      findStocks(): Promise<Stock[]> {
        return this.stockRepository.find();
      }
    
      findStock(id: number): Promise<Stock | null> {
        return this.stockRepository.findOneBy({ id });
      }

      async createStock(createStockDto: CreateStockDto) {
        const data = await this.stockRepository.create(createStockDto);
        return await this.stockRepository.save(data);
      }
    
      async removeStock(id: number): Promise<void> {
        await this.stockRepository.delete(id);
      }
      
}
