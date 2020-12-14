import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PostInput {
  @Field()
  readonly message: string;
  @Field(() => Int)
  readonly length: number;
  @Field()
  readonly author: string;
}
