import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { MealItemsController } from './meal-items.controller';
import { MealItemsService } from './meal-items.service';

@Module({
  controllers: [MealsController, MealItemsController],
  providers: [MealsService, MealItemsService],
})
export class MealsModule {}
