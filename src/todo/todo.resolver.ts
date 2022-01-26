import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { addtodoInput } from "./inputs/addtodo.input";
import { TodoService } from "./todo.service";
import { todoType } from "./todo.type";


@Resolver(() => todoType) 
export class toDoResolver {

    
    constructor(private readonly todoService : TodoService){}


    @Query(_ => [todoType],{name:"getalltodos" , description: " Returns all Todos"})
   async getalltodos():Promise<todoType[]>{
       return  this.todoService.getAllTodos()
    }
    @Mutation(_ => todoType,{nullable:true,description:"Deletes a Todo Of An Id Given"})
    async deletetodo(@Args('id') id:string) :Promise<void>{
        return this.todoService.deletetodo(id); 
    }
    @Mutation(_ => todoType,{description:"ADD A new Todo "})
    addtodo(@Args('addtodoinput') addtodoInput:addtodoInput){
        return this.todoService.addtodo(addtodoInput) ; 
    }

}