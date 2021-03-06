import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field(() => ID)
  id: string;
  @Field()
  readonly message: string;
  @Field(() => Int)
  readonly length: number;
  @Field()
  readonly author: string;
}
