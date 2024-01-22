import { PartialType } from '@nestjs/mapped-types';
import { CreateStockDto } from './create-stock.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStockDto extends PartialType(CreateStockDto) {
  @IsOptional()
  @IsNumber()
  reportingMonth: number;

  @IsOptional()
  @IsNumber()
  outstandingShares: number;

  @IsOptional()
  @IsNumber()
  parValue: number;

  @IsOptional()
  @IsString()
  capital: string;
}