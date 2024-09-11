import { Injectable, NotFoundException } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { CreateMealDto, UpdateMealDto } from './dto/meals.dto';

@Injectable()
export class MealsService {
  constructor(private readonly databaseService: DatabaseService) {}

  // Create a new meal
  async create(createMealDto: CreateMealDto) {
    return this.databaseService.meal.create({
      data: createMealDto,
    });
  }

  // Find all meals
  async findAll() {
    return this.databaseService.meal.findMany();
  }

  // Find a single meal by ID
  async findOne(id: string) {
    const data = await this.databaseService.meal.findUnique({
      where: { id },
    });

    if (!data) {
      throw new NotFoundException('Meal not found');
    }

    return data;
  }

  async update(id: string, updateMealDto: UpdateMealDto) {
    const data = await this.databaseService.meal.update({
      where: { id },
      data: updateMealDto,
    });

    if (!data) {
      throw new NotFoundException('Meal not found');
    }

    return data;
  }

  async remove(id: string) {
    const data = await this.databaseService.meal.delete({
      where: { id },
    });

    if (!data) {
      throw new NotFoundException('Meal not found');
    }

    return data;
  }
}
