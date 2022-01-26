import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { env } from "./environement.variables";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [
    TodoModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    MongooseModule.forRoot(env.DB_URI)
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
