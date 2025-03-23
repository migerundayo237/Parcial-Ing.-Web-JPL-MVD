import { Module } from '@nestjs/common';
import { BlackMarketTransactionsService } from './black-market-transactions.service';
import { BlackMarketTransactionsController } from './black-market-transactions.controller';

@Module({
  controllers: [BlackMarketTransactionsController],
  providers: [BlackMarketTransactionsService],
})
export class BlackMarketTransactionsModule {}
