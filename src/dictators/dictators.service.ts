import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';

@Injectable()
export class DictatorsService {
  constructor(
    @InjectRepository(Dictator)
    private dictatorsRepository: Repository<Dictator>,
  ) {}

  async create(createDictatorDto: CreateDictatorDto) {
    const newDictator = this.dictatorsRepository.create(createDictatorDto);
    await this.dictatorsRepository.save(newDictator);
    return newDictator;
  }

  findAll() {
    const dictators = this.dictatorsRepository.find();
    return dictators;
  }

  findOne(id: string) {
    const dictator = this.dictatorsRepository.findOneBy({id:id});
    if(!dictator){
      throw new Error("Dictator not found");
    }
    return dictator;
  }

  async update(id: string, updateDictatorDto: UpdateDictatorDto) {
      const battle = await this.dictatorsRepository.preload({id:id,...this.dictatorsRepository});
      if(!battle){
        throw new NotFoundException(`Battle ${id} not found`);
      }
      await this.dictatorsRepository.save(battle);
      return battle;
    }
  

  remove(id: string) {
    const dictator = this.findOne(id);
    this.dictatorsRepository.delete({id:id});
    return dictator;
  }
}
