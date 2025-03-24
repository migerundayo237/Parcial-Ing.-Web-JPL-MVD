import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Sponsor } from './entities/sponsor.entity';

@Injectable()
export class SponsorsService {
  
  constructor(
    @InjectRepository(Sponsor)
    private sponsorRepository: Repository<Sponsor>,
  ) {}

  async create(createSponsorDto: CreateSponsorDto) {
    const newSponsor = this.sponsorRepository.create(createSponsorDto);
    await this.sponsorRepository.save(newSponsor);
    return newSponsor;
  }

  findAll() {
    const sponsors = this.sponsorRepository.find();
    return sponsors;
  }

  findOne(id: string) {
    const sponsor = this.sponsorRepository.findOneBy({id:id});
    if(!sponsor){
      throw new Error("Sponsor not found");
    }
    return sponsor;
  }

  async update(id: string, updateSponsorDto: UpdateSponsorDto) {
    const sponsor = await this.sponsorRepository.preload({id:id,...updateSponsorDto});
    if(!sponsor){
      throw new NotFoundException(`Sponsor ${id} not found`);
    }
    await this.sponsorRepository.save(sponsor);
    return sponsor;
  }

  remove(id: string) {
    const sponsor = this.findOne(id);
    this.sponsorRepository.delete(id);
    return sponsor;
  }
}
