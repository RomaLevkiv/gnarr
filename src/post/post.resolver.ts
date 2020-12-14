import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [CreatePostDto])
  getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Mutation(() => CreatePostDto)
  createPost(
    @Args('message') message: string,
    @Args('length') length: number,
    @Args('author') author: string,
  ) {
    return this.postService.createPost({ message, length, author });
  }
}
