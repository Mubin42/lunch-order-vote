import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { MealsModule } from './meals/meals.module';

@Module({
  imports: [DatabaseModule, MealsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
