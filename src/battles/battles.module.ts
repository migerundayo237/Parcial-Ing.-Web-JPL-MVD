import { Module } from '@nestjs/common';
import { BattlesService } from './battles.service';
import { BattlesController } from './battles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './entities/battle.entity';

@Module({
  controllers: [BattlesController],
  providers: [BattlesService],
  imports: [TypeOrmModule.forFeature([Battle])],
  exports: [BattlesService]
})
export class BattlesModule {}
