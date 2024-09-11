import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { MealsModule } from './meals/meals.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [DatabaseModule, MealsModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
