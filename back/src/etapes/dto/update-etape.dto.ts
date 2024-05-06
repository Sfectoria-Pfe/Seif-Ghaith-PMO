import { PartialType,ApiProperty} from '@nestjs/swagger';
import { CreateEtapeDto } from './create-etape.dto';
import {IsString,IsDate} from 'class-validator';

export class UpdateEtapeDto extends PartialType(CreateEtapeDto) {
   
}
