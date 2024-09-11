import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MealsService {
  constructor(private readonly databaseService: DatabaseService) {}

  // Create a new meal
  async create(createMealDto: Prisma.MealCreateInput) {
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

  async update(id: string, updateMealDto: Prisma.MealUpdateInput) {
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
