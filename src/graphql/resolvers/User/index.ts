import { Prisma } from '@prisma/client';
import { IGetUserByIdArgs, IUserForm } from '../../../types/user';
import z from 'zod';
import { IAppContext } from '../../../types/context';

const UserFormSchema = z.object({
  userName: z
    .string()
    .min(1, { message: 'userName is required' })
    .max(100, { message: 'userName must be less than 100 characters' }),
});

const UserQuery = {
  async getUsers(_: unknown, __: unknown, ctx: IAppContext) {
    const users = await ctx.prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    return users;
  },

  async getUserById(_: unknown, { id }: IGetUserByIdArgs, ctx: IAppContext) {
    const user = await ctx.prisma.user.findUnique({
      where: { id },
      include: {
        posts: true,
      },
    });
    return user;
  },
};

const UserMutation = {
  async postUser(_: unknown, { data }: IUserForm, ctx: IAppContext) {
    try {
      UserFormSchema.parse(data);
      const user = await ctx.prisma.user.create({
        data,
      });
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(error.message);
      }
    }
  },
};

export { UserMutation, UserQuery };
