import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MongodbService } from './mongodb.service';
import { createInput, createOutput } from './dto/create-mongodb.dto copy';
import { findOneOutput } from './dto/findOne-mongodb.dto';
import { updateInput } from './dto/update-mongodb.dto';
import { deleteOutput } from './dto/delete-mongodb.dto';

@Controller('mongodb')
export class MongodbController {
  constructor(private readonly mongodbService: MongodbService) {}

  @Post()
  async create(@Body() createMongodbDto: createInput): Promise<createOutput> {
    return this.mongodbService.create(createMongodbDto);
  }

  @Get()
  async findAll() {
    return this.mongodbService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<findOneOutput> {
    return this.mongodbService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMongodbDto: updateInput) {
    return this.mongodbService.update(id, updateMongodbDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<deleteOutput> {
    return this.mongodbService.remove(id);
  }
}
