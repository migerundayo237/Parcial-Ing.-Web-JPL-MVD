import { Module } from '@nestjs/common';
import { ContestantsService } from './contestants.service';
import { ContestantsController } from './contestants.controller';

@Module({
  controllers: [ContestantsController],
  providers: [ContestantsService],
})
export class ContestantsModule {}
