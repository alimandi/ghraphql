import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class deleteOutput {
  @Field(() => String)
  message: string;
}
