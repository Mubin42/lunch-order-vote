import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateRestaurantDto, UpdateRestaurantDto } from './dto/restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(private readonly databaseService: DatabaseService) {}

  // Create a new restaurant
  async create(createRestaurantDto: CreateRestaurantDto) {
    return this.databaseService.restaurant.create({
      data: createRestaurantDto,
    });
  }

  // Find all restaurants
  async findAll() {
    return this.databaseService.restaurant.findMany();
  }

  // Find a single restaurant by ID
  async findOne(id: string) {
    const data = await this.databaseService.restaurant.findUnique({
      where: { id },
    });

    if (!data) {
      throw new NotFoundException('Restaurant not found');
    }

    return data;
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    const data = await this.databaseService.restaurant.update({
      where: { id },
      data: updateRestaurantDto,
    });

    if (!data) {
      throw new NotFoundException('Restaurant not found');
    }

    return data;
  }

  async remove(id: string) {
    const data = await this.databaseService.restaurant.delete({
      where: { id },
    });

    if (!data) {
      throw new NotFoundException('Restaurant not found');
    }

    return data;
  }
}
