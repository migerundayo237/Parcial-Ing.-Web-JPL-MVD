import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlackMarketTransactionsService } from './black-market-transactions.service';
import { CreateBlackMarketTransactionDto } from './dto/create-black-market-transaction.dto';
import { UpdateBlackMarketTransactionDto } from './dto/update-black-market-transaction.dto';

@Controller('black-market-transactions')
export class BlackMarketTransactionsController {
  constructor(private readonly blackMarketTransactionsService: BlackMarketTransactionsService) {}

  @Post()
  create(@Body() createBlackMarketTransactionDto: CreateBlackMarketTransactionDto) {
    return this.blackMarketTransactionsService.create(createBlackMarketTransactionDto);
  }

  @Get()
  findAll() {
    return this.blackMarketTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blackMarketTransactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlackMarketTransactionDto: UpdateBlackMarketTransactionDto) {
    return this.blackMarketTransactionsService.update(+id, updateBlackMarketTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blackMarketTransactionsService.remove(+id);
  }
}
