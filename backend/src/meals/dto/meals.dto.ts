import { PartialType } from '@nestjs/mapped-types';
import { Day } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMealDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  restaurantId: string;

  @IsEnum(Day)
  @IsNotEmpty()
  day: Day;
}

export class UpdateMealDto extends PartialType(CreateMealDto) {}
