import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { createInput, createOutput } from './dto/create-mongodb.dto copy';
import { MongodbService } from './mongodb.service';
import { Body, Param } from '@nestjs/common';
import { findOneOutput } from './dto/findOne-mongodb.dto';
import { updateInput, updateOutput } from './dto/update-mongodb.dto';
import { findAllOutput } from './dto/findAll-mongodb.dto';
import { deleteOutput } from './dto/delete-mongodb.dto';

@Resolver('mongodb')
export class MongodbResolver {
  constructor(private readonly mongodbService: MongodbService) {}

  @Mutation(() => createOutput)
  async create(
    @Args('input') createMongodbDto: createInput,
  ): Promise<createOutput> {
    return this.mongodbService.create(createMongodbDto);
  }

  @Query(() => findAllOutput)
  async findAll(): Promise<findAllOutput> {
    return this.mongodbService.findAll();
  }

  @Query(() => findOneOutput)
  async findOne(@Args('id') id: string): Promise<findOneOutput> {
    return this.mongodbService.findOne(id);
  }

  @Mutation(() => updateOutput)
  async update(
    @Args('id') id: string,
    @Args('input') updateMongodbDto: updateInput,
  ) {
    return this.mongodbService.update(id, updateMongodbDto);
  }
  @Mutation(() => deleteOutput)
  async remove(@Args('id') id: string): Promise<deleteOutput> {
    return this.mongodbService.remove(id);
  }
}
