import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { person } from '../schema/mongodb.schema';
@InputType()
export class updateInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  family: string;

  @Field(() => String)
  email: string;

  @Field(() => Number)
  age: number;
}

@ObjectType()
export class updateOutput {
  @Field(() => String)
  message: string;
  @Field(() => [person])
  update: person;
}
