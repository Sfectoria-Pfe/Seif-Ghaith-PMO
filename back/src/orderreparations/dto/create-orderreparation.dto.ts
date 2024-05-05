import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class CreateOrderreparationDto {
    
    @ApiProperty()
    @IsString()
    title :string;
    @ApiProperty()
    @IsString()
    rapport :string;
    @ApiProperty()
    @IsString()
    description :string;
    @ApiProperty()
    @IsString()
    status :string;
    @ApiProperty()
    @IsDate()
    date :Date;
    @ApiProperty()
    @IsDate()
    createdAt :Date;
}
