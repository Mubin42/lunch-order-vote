import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateVoteDto } from './dtos/vote.dto';

@Injectable()
export class VoteService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createVoteDto: CreateVoteDto) {
    return this.databaseService.vote.create({
      data: createVoteDto,
    });
  }

  async findAll() {
    return this.databaseService.vote.findMany();
  }
}
