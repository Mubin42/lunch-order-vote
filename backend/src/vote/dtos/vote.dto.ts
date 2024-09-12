import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateVoteDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  employeeId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  mealId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  newEmployeeName: string;
}
