import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber } from "class-validator";
export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  currency: string;

  @ApiProperty()
  @IsNotEmpty()
  currentDate: Date;

  @ApiProperty()
  @IsNumber()
  invoiceNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  dateOfIssue: Date;

  

  @ApiProperty()
  notes?: string;

  @ApiProperty()
  @IsNotEmpty()
  total: number;

  @ApiProperty()
  @IsNotEmpty()
  subTotal: number;

  @ApiProperty()
  @IsNotEmpty()
  taxRate: number;

  @ApiProperty()
  @IsNotEmpty()
  taxAmount: number;

  @ApiProperty()

  discountRate?: number;

  @ApiProperty()
  @IsNotEmpty()
  discountAmount: number;

  @ApiProperty()
  @IsArray()
  items:Item[]

  @ApiProperty()
  @IsNotEmpty()
  clientId: number;
}


class Item {
  @ApiProperty()
  @IsNotEmpty()
  item: string;

  @ApiProperty()
  @IsNotEmpty()
  prix_unitaire: number;


  @ApiProperty()
  @IsNotEmpty()
  quantity: number;
}









