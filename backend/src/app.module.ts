import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { MealsModule } from './meals/meals.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { EmployeeModule } from './employee/employee.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [DatabaseModule, MealsModule, RestaurantModule, EmployeeModule, VoteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
