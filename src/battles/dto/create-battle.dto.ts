import { IsString, IsBoolean, IsOptional } from "class-validator";

export class CreateBattleDto {
    @IsString()
    contestant_1: string;
    @IsString()
    contestant_2: string;
    @IsString()
    @IsOptional()
    winner?: string;
    @IsString()
    @IsOptional()
    injuries?: string;
    @IsBoolean()
    @IsOptional()
    death_occurred?: boolean;
    @IsString()
    @IsOptional()
    date?: Date;
}
