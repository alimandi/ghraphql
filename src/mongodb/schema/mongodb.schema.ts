import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type personDocument = HydratedDocument<person>;

@InputType('personInputType', { isAbstract: true })
@ObjectType()
@Schema({ collection: 'people' })
export class person {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  family: string;

  @Field(() => String)
  @Prop()
  email: string;

  @Field(() => Number)
  @Prop()
  age: number;
}

export const personSchema = SchemaFactory.createForClass(person);
