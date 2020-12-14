import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { IPost } from './interfaces/post.interface';
import { PostInput } from './input/post.input';

@Injectable()
export class PostService {
  private posts: IPost[] = [
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

  getAllPosts(): IPost[] {
    return this.posts;
  }

  createPost(postInput: PostInput): IPost {
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
