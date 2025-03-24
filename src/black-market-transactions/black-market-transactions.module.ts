import { Module } from '@nestjs/common';
import { BlackMarketTransactionsService } from './black-market-transactions.service';
import { BlackMarketTransactionsController } from './black-market-transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlackMarketTransaction } from './entities/black-market-transaction.entity';

@Module({
  controllers: [BlackMarketTransactionsController],
  providers: [BlackMarketTransactionsService],
  imports: [TypeOrmModule.forFeature([BlackMarketTransaction])],
  exports: [BlackMarketTransactionsService]
})
export class BlackMarketTransactionsModule {}
