import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { PostInput } from './dto/post.input';
import { PostModel } from './model/post.model';

@Injectable()
export class PostService {
  private posts: PostModel[] = [
    {
      id: 'test',
      message: 'message test',
      length: 0,
      author: 'author test',
    },
    {
      id: 'test2',
      message: 'message test2',
      length: 2,
      author: 'author test2',
    },
  ];

  getAllPosts(): PostModel[] {
    return this.posts;
  }

  createPost(postInput: PostInput): PostModel {
    const { message, length, author } = postInput;
    const newPost = {
      id: uuid(),
      message,
      length,
      author,
    };
    this.posts.push(newPost);
    return newPost;
  }
}
