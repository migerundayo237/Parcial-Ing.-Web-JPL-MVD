import { IsString, IsNotEmpty} from 'class-validator';
export class CreateSponsorDto {
    @IsString()
    @IsNotEmpty()
    company_name: string;
    
    @IsString()
    @IsNotEmpty()
    donated_items: string;
    
    @IsString()
    @IsNotEmpty()
    preferred_fighter: string;
}
