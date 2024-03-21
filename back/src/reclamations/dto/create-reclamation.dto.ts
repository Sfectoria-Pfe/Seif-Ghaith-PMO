import { ApiProperty } from "@nestjs/swagger"

export class CreateReclamationDto {
    @ApiProperty()
    clientId:number 
    @ApiProperty()
    date:string
}
