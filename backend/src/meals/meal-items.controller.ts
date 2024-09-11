import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MealItemsService } from './meal-items.service';
import { CreateMealItemDto } from './dto/meai-items.dto';

@ApiTags('meals')
@Controller('meals')
export class MealItemsController {
  constructor(private readonly mealItemsService: MealItemsService) {}

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async create(createMealItemDto: CreateMealItemDto) {
    const data = await this.mealItemsService.create(createMealItemDto);

    return {
      message: 'Meal item created successfully',
      data,
    };
  }
}
