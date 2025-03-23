import { PartialType } from '@nestjs/mapped-types';
import { CreateBlackMarketTransactionDto } from './create-black-market-transaction.dto';

export class UpdateBlackMarketTransactionDto extends PartialType(CreateBlackMarketTransactionDto) {}
