import { PartialType,ApiProperty} from '@nestjs/swagger';
import { CreateEtapeDto } from './create-etape.dto';
import {IsString,IsDate} from 'class-validator';

export class UpdateEtapeDto extends PartialType(CreateEtapeDto) {
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
    @IsString()
    type :string;
    @ApiProperty()
    @IsDate()
    date : Date;
    @ApiProperty()
    @IsDate()
    createdAt :Date;
}
