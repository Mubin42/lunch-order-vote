import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateVoteDto } from './dtos/vote.dto';
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
export class VoteService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly employeeService: EmployeeService,
  ) {}

  async create(createVoteDto: CreateVoteDto) {
    if (createVoteDto.newEmployeeName) {
      const employee = await this.employeeService.create({
        name: createVoteDto.newEmployeeName,
      });
      createVoteDto.employeeId = employee.id;
    }

    if (!createVoteDto.employeeId) {
      throw new BadRequestException('Employee ID or name is required');
    }

    return this.databaseService.vote.create({
      data: {
        mealId: createVoteDto.mealId,
        employeeId: createVoteDto.employeeId,
      },
    });
  }

  async findAll() {
    return this.databaseService.vote.findMany();
  }
}
