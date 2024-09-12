import { Injectable, NotFoundException } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { CreateMealDto, UpdateMealDto } from './dto/meals.dto';
import { Day } from '@prisma/client';

@Injectable()
export class MealsService {
  constructor(private readonly databaseService: DatabaseService) {}

  // Create a new meal
  async create(createMealDto: CreateMealDto) {
    return this.databaseService.meal.create({
      data: createMealDto,
    });
  }

  async findAll() {
    return this.databaseService.meal.findMany({
      include: {
        mealItems: true,
      },
    });
  }

  // get meals by date
  async findByDate(date: string) {
    const day = this.generateDate(date);

    return this.databaseService.meal.findMany({
      where: { day },
      include: {
        mealItems: true,
      },
    });
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

  generateDate(date: string): Day {
    switch (new Date(date).getDay()) {
      case 0:
        return Day.SUNDAY;

      case 1:
        return Day.MONDAY;

      case 2:
        return Day.TUESDAY;

      case 3:
        return Day.WEDNESDAY;

      case 4:
        return Day.THURSDAY;

      case 5:
        return Day.FRIDAY;

      case 6:
        return Day.SATURDAY;

      default:
        return Day.MONDAY;
    }
  }
}
