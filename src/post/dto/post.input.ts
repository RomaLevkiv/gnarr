import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class PostInput {
  @Field()
  @IsNotEmpty()
  readonly message: string;

  @Field(() => Int)
  @IsInt()
  readonly length: number;

  @Field()
  @IsNotEmpty()
  readonly author: string;
}
