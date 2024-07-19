import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs: importSchema(require.resolve('./graphql/schema/index.graphql')),
  resolvers,
});

server
  .listen(process.env.SERVER_PORT)
  .then(() => console.log('Server On ...'))
  .catch((error) => console.log(error));
