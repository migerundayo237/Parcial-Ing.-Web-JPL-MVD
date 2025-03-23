import { Module } from '@nestjs/common';
import { DictatorsService } from './dictators.service';
import { DictatorsController } from './dictators.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';

@Module({
  controllers: [DictatorsController],
  providers: [DictatorsService],
  imports: [TypeOrmModule.forFeature([Dictator])],
  exports: [DictatorsService]
})
export class DictatorsModule {}
