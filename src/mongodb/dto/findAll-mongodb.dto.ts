import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { person } from '../schema/mongodb.schema';

@InputType('findAllOutputInputType', { isAbstract: true })
@ObjectType()
export class findAllOutput {
  @Field(() => String)
  message: string;

  @Field(() => [person])
  findAll: person[];
}
