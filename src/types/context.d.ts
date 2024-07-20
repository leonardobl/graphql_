import { PrismaClient } from '@prisma/client';

export interface IAppContext {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
}
