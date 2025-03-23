import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContestantDto } from './dto/create-contestant.dto';
import { UpdateContestantDto } from './dto/update-contestant.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contestant } from './entities/contestant.entity';

@Injectable()
export class ContestantsService {
  constructor(
    @InjectRepository(Contestant)
    private readonly contestantRepository: Repository<Contestant>,
  ) {}

  async create(createContestantDto: CreateContestantDto) {
    const newContestant = this.contestantRepository.create(createContestantDto);
    await this.contestantRepository.save(newContestant);
    return newContestant;
  }

  findAll() {
    const contestants = this.contestantRepository.find();
    return contestants;
  }

  findOne(id: string) {
    const contestant = this.contestantRepository.findOneBy({id:id});
    if(!contestant){
      throw new Error("Contestant not found");
    }
    return contestant;
  }

  async update(id: string, updateContestantDto: UpdateContestantDto) {
    const contestant = await this.contestantRepository.preload({id:id,...updateContestantDto});
    if(!contestant){
      throw new NotFoundException(`Contestant ${id} not found`);
    }
    await this.contestantRepository.save(contestant);
    return contestant;
  }

  remove(id: string) {
    const contestant = this.findOne(id);
    this.contestantRepository.delete({id:id});
    return contestant;
  }
}
