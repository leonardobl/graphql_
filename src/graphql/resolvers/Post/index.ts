import { PrismaClient } from '@prisma/client';
import { IGetPostByIdArgs, IGetPostOfUserByIdArgs } from '../../../types/post';

const prisma = new PrismaClient();

const PostQuery = {
  async getPosts() {
    const posts = await prisma.post.findMany();
    return posts;
  },
  async getPostById(_: unknown, { id }: IGetPostByIdArgs) {
    const post = await prisma.post.findUnique({ where: { id } });
    return post;
  },

  async getPostsOfUserById(_: unknown, { id }: IGetPostOfUserByIdArgs) {
    const posts = await prisma.post.findMany({ where: { userId: id } });
    return posts;
  },
};

export { PostQuery };
