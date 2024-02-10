import { Module } from '@nestjs/common';
import { MongodbService } from './mongodb.service';
import { MongodbController } from './mongodb.controller';
import { MongodbResolver } from './mongodb.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { personSchema } from './schema/mongodb.schema';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'person', schema: personSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
  controllers: [MongodbController],
  providers: [MongodbService, MongodbResolver],
})
export class MongodbModule {}
