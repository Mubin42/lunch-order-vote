import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dtos/employee.dto';

@ApiTags('employee')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    const data = await this.employeeService.create(createEmployeeDto);
    
    return {
      message: 'Employee created successfully',
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The records have been successfully retrieved.',
  })
  @Get()
  async findAll() {
    const data = await this.employeeService.findAll();

    return {
      data,
    };
  }
}
