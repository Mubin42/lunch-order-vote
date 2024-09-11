import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto, UpdateRestaurantDto } from './dto/restaurant.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async create(@Body() createRestaurantDto: CreateRestaurantDto) {
    const data = await this.restaurantService.create(createRestaurantDto);

    return {
      message: 'Restaurant created successfully',
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The records have been successfully retrieved.',
  })
  @Get()
  async findAll() {
    const data = await this.restaurantService.findAll();

    return {
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The record has been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'Restaurant not found' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.restaurantService.findOne(id);

    return {
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Restaurant not found' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    const data = await this.restaurantService.update(id, updateRestaurantDto);

    return {
      message: 'Restaurant updated successfully',
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Restaurant not found' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.restaurantService.remove(id);

    return {
      message: 'Restaurant deleted successfully',
      data,
    };
  }
}
