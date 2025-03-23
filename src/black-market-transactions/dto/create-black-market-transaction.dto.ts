import {IsString, IsNumber} from 'class-validator';
import {TransactionStatus } from '../entities/black-market-transaction.entity';

export class CreateBlackMarketTransactionDto {
    @IsString()
    buyer_id: string;

    @IsString()
    seller_id: string;

    @IsString()
    item: string;

    @IsNumber()
    amount: number;

    @IsString()
    status: TransactionStatus;
}

