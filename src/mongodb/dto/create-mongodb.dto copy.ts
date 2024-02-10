import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class createInput {
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
export class createOutput {
  @Field(() => String)
  message: string;
}
