import { Injectable } from '@nestjs/common';

import { updateInput, updateOutput } from './dto/update-mongodb.dto';
import { InjectModel } from '@nestjs/mongoose';
import { person } from './schema/mongodb.schema';
import { Model } from 'mongoose';
import { createInput, createOutput } from './dto/create-mongodb.dto copy';
import { findAllOutput } from './dto/findAll-mongodb.dto';
import { findOneOutput } from './dto/findOne-mongodb.dto';
import { deleteOutput } from './dto/delete-mongodb.dto';

@Injectable()
export class MongodbService {
  constructor(
    @InjectModel('person') private readonly personModel: Model<person>,
  ) {}

  async create(createMongodbDto: createInput): Promise<createOutput> {
    const test = await this.personModel.insertMany({ ...createMongodbDto });
    return { message: 'crated ...' };
  }

  async findAll(): Promise<findAllOutput> {
    const findAll = await this.personModel.find();

    return {
      message: 'find All....',
      findAll,
    };
  }
  async findOne(id: string): Promise<findOneOutput> {
    const findOne = await this.personModel.findById(id);
    return {
      message: 'find one ....',
      findOne,
    };
  }

  async update(
    id: string,
    updateMongodbDto: updateInput,
  ): Promise<updateOutput> {
    const update = await this.personModel.findByIdAndUpdate(
      { _id: id },
      { ...updateMongodbDto },
      { new: true },
    );
    return { message: 'person is update ...', update };
  }

  async remove(id: string): Promise<deleteOutput> {
    await this.personModel.findOneAndDelete({ _id: id });
    return { message: 'person is delete' };
  }
}
