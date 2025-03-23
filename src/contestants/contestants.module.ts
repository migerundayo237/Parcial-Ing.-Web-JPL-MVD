import { Module } from '@nestjs/common';
import { ContestantsService } from './contestants.service';
import { ContestantsController } from './contestants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contestant } from './entities/contestant.entity';

@Module({
  controllers: [ContestantsController],
  providers: [ContestantsService],
  imports: [TypeOrmModule.forFeature([Contestant])],
  exports: [ContestantsService]
})
export class ContestantsModule {}
