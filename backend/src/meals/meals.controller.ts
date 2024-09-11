import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { MealsService } from './meals.service';

import { CreateMealDto, UpdateMealDto } from './dto/meals.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('meals')
@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async create(@Body() createMealDto: CreateMealDto) {
    const data = await this.mealsService.create(createMealDto);

    return {
      message: 'Meal created successfully',
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The records have been successfully retrieved.',
  })
  @Get()
  async findAll() {
    const data = await this.mealsService.findAll();

    return {
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The records have been successfully retrieved.',
  })
  @Get('day')
  async findByDate(@Query('date') date: string) {
    const data = await this.mealsService.findByDate(date);

    return {
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The record has been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'Meal not found' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.mealsService.findOne(id);

    return {
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Meal not found' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
    const data = await this.mealsService.update(id, updateMealDto);

    return {
      message: 'Meal updated successfully',
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Meal not found' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.mealsService.remove(id);

    return {
      message: 'Meal deleted successfully',
      data,
    };
  }
}
