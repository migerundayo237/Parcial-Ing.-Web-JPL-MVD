import { IsString, IsNumber, Min, Max } from 'class-validator';
import { Status } from '../entities/contestant.entity';

export class CreateContestantDto {
    @IsString()
    name: string;
    @IsString()
    nickname: string;
    @IsString()
    origin: string;
    @IsNumber()
    @Min(1)
    @Max(100)
    strength: number;
    @IsNumber()
    @Min(1)
    @Max(100)
    agility: number;
    @IsNumber()
    wins: number;
    @IsNumber()
    losses: number;
    @IsString()
    status: Status;
}
