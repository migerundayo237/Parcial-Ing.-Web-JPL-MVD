import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContestantsModule } from './contestants/contestants.module';
import { BlackMarketTransactionsModule } from './black-market-transactions/black-market-transactions.module';
import { BlackmarkettransactionsModule } from './blackmarkettransactions/blackmarkettransactions.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { DictatorsModule } from './dictators/dictators.module';
import { BattlesModule } from './battles/battles.module';
import { ContestantsModule } from './contestants/contestants.module';

@Module({
  imports: [ContestantsModule, BattlesModule, DictatorsModule, SponsorsModule, BlackmarkettransactionsModule, BlackMarketTransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
