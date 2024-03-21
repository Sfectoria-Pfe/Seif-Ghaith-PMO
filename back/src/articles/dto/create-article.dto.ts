import { ApiProperty } from "@nestjs/swagger"

export class CreateArticleDto {
    @ApiProperty()
    title     :string
    @ApiProperty()
    rapport   :string
    @ApiProperty()

    statues   :string
    @ApiProperty()

    clientId  :number
}
