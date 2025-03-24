import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlackMarketTransactionDto } from './dto/create-black-market-transaction.dto';
import { UpdateBlackMarketTransactionDto } from './dto/update-black-market-transaction.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BlackMarketTransaction } from './entities/black-market-transaction.entity';

@Injectable()
export class BlackMarketTransactionsService {
  constructor(
    @InjectRepository(BlackMarketTransaction)
    private blackMarketTransactionRepository: Repository<BlackMarketTransaction>,
  ) {}

  async create(createBlackMarketTransactionDto: CreateBlackMarketTransactionDto) {
    const newBlackMarketTransaction = this.blackMarketTransactionRepository.create(createBlackMarketTransactionDto);
    await this.blackMarketTransactionRepository.save(newBlackMarketTransaction);
    return newBlackMarketTransaction;
  }

  findAll() {
    const blackMarketTransactions = this.blackMarketTransactionRepository.find();
    return blackMarketTransactions;
  }

  findOne(id: string) {
    const blackMarketTransaction = this.blackMarketTransactionRepository.findOneBy({id:id});
    if(!blackMarketTransaction){
      throw new Error("Black Market Transaction not found");
    }
    return blackMarketTransaction;
  }

  async update(id: string, updateBlackMarketTransactionDto: UpdateBlackMarketTransactionDto) {
    const blackMarketTransaction = await this.blackMarketTransactionRepository.preload({id:id,...updateBlackMarketTransactionDto});
    if(!blackMarketTransaction){
      throw new NotFoundException(`Black Market Transaction ${id} not found`);
    }
    await this.blackMarketTransactionRepository.save(blackMarketTransaction);
    return blackMarketTransaction;
  }

  remove(id: string) {
    const blackMarketTransaction = this.findOne(id);
    this.blackMarketTransactionRepository.delete({id:id});
    return blackMarketTransaction;
  }
}
