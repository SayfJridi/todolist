import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { toDoResolver } from './todo.resolver';
import { todoSchema } from './todo.schema';
import { TodoService } from './todo.service';

@Module({
  imports:[MongooseModule.forFeature([{name:"todo" , schema:todoSchema}])] , 
  providers: [TodoService,toDoResolver]
})
export class TodoModule {}
