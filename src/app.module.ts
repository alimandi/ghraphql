import { Module } from '@nestjs/common';
import { MongodbModule } from './mongodb/mongodb.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    MongodbModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mongodb'),
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
