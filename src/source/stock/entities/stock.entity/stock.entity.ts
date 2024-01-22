import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StockEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stockCode: string;

  @Column()
  stockName: string;

  @Column()
  marketType: string;

  @Column()
  mainAffiliation: string;

  @Column()
  subAffiliation: string;

  @Column()
  stockCategoryCode: string;

  @Column()
  stockCategoryName: string;

  @Column()
  reportingMonth: number;

  @Column()
  advisee: string;

  @Column()
  outstandingShares: number;

  @Column()
  parValue: number;

  @Column()
  capital: number;

  @Column()
  currencyType: string;

  @Column()
  ceo: string;
  






}
