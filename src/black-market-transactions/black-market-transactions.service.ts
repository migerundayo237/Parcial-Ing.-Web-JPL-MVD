import { Injectable } from '@nestjs/common';
import { CreateBlackMarketTransactionDto } from './dto/create-black-market-transaction.dto';
import { UpdateBlackMarketTransactionDto } from './dto/update-black-market-transaction.dto';

@Injectable()
export class BlackMarketTransactionsService {
  create(createBlackMarketTransactionDto: CreateBlackMarketTransactionDto) {
    return 'This action adds a new blackMarketTransaction';
  }

  findAll() {
    return `This action returns all blackMarketTransactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blackMarketTransaction`;
  }

  update(id: number, updateBlackMarketTransactionDto: UpdateBlackMarketTransactionDto) {
    return `This action updates a #${id} blackMarketTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} blackMarketTransaction`;
  }
}
