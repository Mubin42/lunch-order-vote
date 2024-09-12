import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [EmployeeModule],
  providers: [VoteService],
  controllers: [VoteController],
})
export class VoteModule {}
