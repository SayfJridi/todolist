import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { addtodoInput } from './inputs/addtodo.input';
import { todoType } from './todo.type';

@Injectable()
export class TodoService {
    constructor(@InjectModel('todo')
        private readonly todoModel:Model<todoType>){}

        async getAllTodos () : Promise<todoType[]>{ 
            return this.todoModel.find() ; 
        }

        async addtodo(addtodoInput:addtodoInput):Promise<todoType>{

            const {title , description} = addtodoInput ; 
            return this.todoModel.create({
                title,
                addedDate: new Date() , 
                description,
            })
          
        }

        async deletetodo(id : string):Promise<void>{

            try{
                await this.todoModel.findByIdAndDelete(id)
            }
            catch(e){
                throw new NotFoundException(`${e.message}`) ; 
            }
        }
}
