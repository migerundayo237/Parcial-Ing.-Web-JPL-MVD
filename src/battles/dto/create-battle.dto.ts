import { IsString, IsBoolean } from "class-validator";

export class CreateBattleDto {
    @IsString()
    contestant_1: string;
    @IsString()
    contestant_2: string;
    @IsString()
    injuries: string;
    @IsBoolean()
    death_occurred: boolean;
    date: Date;
}
