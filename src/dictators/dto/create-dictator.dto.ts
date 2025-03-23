import { IsString, IsNumber, Min, Max } from "class-validator";

export class CreateDictatorDto {
    @IsString()
    name: string;
    @IsString()
    territory: string;
    @IsNumber()
    number_of_slaves: number;
    @IsNumber()
    @Min(0)
    @Max(100)
    loyalty_to_Carolina: number;
}
