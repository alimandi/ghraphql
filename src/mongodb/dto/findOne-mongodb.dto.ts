import { Field, ObjectType } from '@nestjs/graphql';
import { person } from '../schema/mongodb.schema';

@ObjectType()
export class findOneOutput {
  @Field(() => String)
  message: string;

  @Field(() => person)
  findOne: person;
}
