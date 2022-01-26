import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

@InputType()
export class addtodoInput {
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(18)
    @Field()
    title:string 
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    @IsOptional()
    @MinLength(5)
    @Field()
    description :string
}



