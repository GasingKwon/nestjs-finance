import { IsString, IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsString()
  stockCode: string;

  @IsString()
  stockName: string;

  @IsString()
  marketType: string;

  @IsString()
  mainAffiliation: string;

  @IsString()
  subAffiliation: string;

  @IsString()
  stockCategoryCode: string;

  @IsString()
  stockCategoryName: string;

  @IsNumber()
  reportingMonth: number;

  @IsString()
  advisee: string;

  @IsNumber()
  outstandingShares: number;

  @IsNumber()
  parValue: number;

  @IsString()
  capital: string;

  @IsString()
  currencyType: string;

  @IsString()
  ceo: string;

  @IsString()
  tel: string;

  @IsString()
  address: string;
}
