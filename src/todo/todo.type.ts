import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType(`todo`)
export class todoType {

    @Field(() => ID)
    id:string 
    @Field()
    title:string ; 

    @Field()
    description:string ; 
    @Field()
    addedDate:Date ; 

    @Field()
    public:boolean ; 

    @Field()
    done: boolean 


}