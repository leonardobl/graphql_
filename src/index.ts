import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import resolvers from './graphql/resolvers';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: importSchema(require.resolve('./graphql/schema/index.graphql')),
  resolvers,
  context: () => {
    return {
      prisma,
    };
  },
});

server
  .listen(process.env.SERVER_PORT)
  .then(() => console.log('Server On ...'))
  .catch((error) => console.log(error));
