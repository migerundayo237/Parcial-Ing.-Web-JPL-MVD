import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContestantsModule } from './contestants/contestants.module';
import { BlackMarketTransactionsModule } from './black-market-transactions/black-market-transactions.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { DictatorsModule } from './dictators/dictators.module';
import { BattlesModule } from './battles/battles.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ContestantsModule, BattlesModule, DictatorsModule, SponsorsModule, BlackMarketTransactionsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT || 5432),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
