import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    @IsString()
    name :string;
    @ApiProperty()
    @IsString()
    password :string;
    @ApiProperty()
    @IsString()
    email :string;
}
