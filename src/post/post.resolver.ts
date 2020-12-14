import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PostModel } from './model/post.model';
import { PostInput } from './dto/post.input';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [PostModel])
  getAllPosts(): PostInput[] {
    return this.postService.getAllPosts();
  }

  @Mutation(() => PostModel)
  createPost(
    @Args('message') message: string,
    @Args('length') length: number,
    @Args('author') author: string,
  ): PostInput {
    return this.postService.createPost({ message, length, author });
  }
}
