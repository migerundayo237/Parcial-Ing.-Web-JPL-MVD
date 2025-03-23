import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Battle } from './entities/battle.entity';

@Injectable()
export class BattlesService {
  constructor(
    @InjectRepository(Battle)
    private battlesRepository: Repository<Battle>,
  ) {}

  async create(createBattleDto: CreateBattleDto) {
    const newBattle = this.battlesRepository.create(createBattleDto);
    await this.battlesRepository.save(newBattle);
    return newBattle;
  }

  findAll() {
    const battles = this.battlesRepository.find();
    return battles;
  }

  findOne(id: string) {
    const battle = this.battlesRepository.findOneBy({id:id});
    if(!battle){
      throw new Error("Battle not found");
    }
    return battle;
  }

  async update(id: string, updateBattleDto: UpdateBattleDto) {
    const battle = await this.battlesRepository.preload({id:id,...updateBattleDto});
    if(!battle){
      throw new NotFoundException(`Battle ${id} not found`);
    }
    await this.battlesRepository.save(battle);
    return battle;
  }

  remove(id: string) {
    const battle = this.findOne(id);
    this.battlesRepository.delete({id:id});
    return battle;
  }
}
