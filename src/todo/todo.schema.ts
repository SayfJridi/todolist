import { Prop, Schema, SchemaFactory, } from "@nestjs/mongoose";


@Schema()
class todo {


    @Prop({
        required: true 
    })
     title:string  ; 

     @Prop({
         type:String,
         default:""
     })
     description:string ; 
     @Prop({})
     addedDate:Date ; 

     @Prop({
        required: true ,
        default:false
    })
    done : boolean

    @Prop({
        required: true ,
        default:false
    })
    public: boolean
}

export const todoSchema = SchemaFactory.createForClass(todo) ; 