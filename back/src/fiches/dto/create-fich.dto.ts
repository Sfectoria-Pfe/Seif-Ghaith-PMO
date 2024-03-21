import { ApiProperty } from '@nestjs/swagger';

export class CreateFichDto {
  @ApiProperty()
  clientId: number
  @ApiProperty()
  articleId: number
  @ApiProperty()
  technicienId: number
}
