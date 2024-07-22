import { IAppContext } from '../../../types/context';
import { IGetPostByIdArgs, IGetPostOfUserByIdArgs } from '../../../types/post';

const PostQuery = {
  async getPosts(_: unknown, __: unknown, ctx: IAppContext) {
    const posts = await ctx.prisma.post.findMany({
      include: {
        comments: true,
      },
    });
    return posts;
  },
  async getPostById(_: unknown, { id }: IGetPostByIdArgs, ctx: IAppContext) {
    const post = await ctx.prisma.post.findUnique({
      where: { id },
      include: {
        comments: true,
      },
    });
    return post;
  },

  async getPostsOfUserById(
    _: unknown,
    { id }: IGetPostOfUserByIdArgs,
    ctx: IAppContext,
  ) {
    const posts = await ctx.prisma.post.findMany({ where: { userId: id } });
    return posts;
  },
};

export { PostQuery };
