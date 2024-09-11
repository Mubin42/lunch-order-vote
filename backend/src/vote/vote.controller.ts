import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { VoteService } from './vote.service';
import { CreateVoteDto } from './dtos/vote.dto';

@ApiTags('Vote')
@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async create(@Body() createVoteDto: CreateVoteDto) {
    const data = await this.voteService.create(createVoteDto);

    return {
      message: 'Vote created successfully',
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'The records have been successfully retrieved.',
  })
  @Get()
  async findAll() {
    const data = await this.voteService.findAll();

    return {
      data,
    };
  }
}
