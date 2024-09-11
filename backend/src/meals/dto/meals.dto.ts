import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Day } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMealDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  restaurantId: string;

  @ApiProperty({ enum: Day })
  @IsEnum(Day)
  @IsNotEmpty()
  day: Day;
}

export class UpdateMealDto extends PartialType(CreateMealDto) {}
