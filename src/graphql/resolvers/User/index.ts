import { Prisma, PrismaClient } from '@prisma/client';
import { IGetUserByIdArgs, IUserForm } from '../../../types/user';
import z from 'zod';

const UserFormSchema = z.object({
  userName: z
    .string()
    .min(1, { message: 'userName is required' })
    .max(100, { message: 'userName must be less than 100 characters' }),
});

const prisma = new PrismaClient({
  log: ['query'],
});

const UserQuery = {
  async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  },

  async getUserById(_: unknown, { id }: IGetUserByIdArgs) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  },
};

const UserMutation = {
  async postUser(_: unknown, { data }: IUserForm) {
    try {
      UserFormSchema.parse(data);
      const user = await prisma.user.create({
        data: { userName: data.userName },
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
