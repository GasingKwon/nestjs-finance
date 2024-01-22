import { Module } from '@nestjs/common';
import { StockModule } from './source/stock/stock.module';
import { InventoryModule } from './source/inventory/inventory.module';
import { UserModule } from './source/user/user.module';
import { TradeModule } from './source/trade/trade.module';
import { SearchModule } from './source/search/search.module';

@Module({
  imports: [
    StockModule,
    InventoryModule,
    UserModule,
    TradeModule,
    SearchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
