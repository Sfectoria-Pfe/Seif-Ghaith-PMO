import { ApiProperty } from "@nestjs/swagger";
import { Status } from "@prisma/client";
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
    status :Status;
    @ApiProperty()
    @IsDate()
    date :Date;
    @ApiProperty()
    @IsDate()
    createdAt :Date;
}
