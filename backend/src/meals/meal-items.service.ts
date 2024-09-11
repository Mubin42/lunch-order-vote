import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateMealItemDto } from './dto/meai-items.dto';

@Injectable()
export class MealItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createMealItemDto: CreateMealItemDto) {
    return this.databaseService.mealItem.create({
      data: createMealItemDto,
    });
  }
}
