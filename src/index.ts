import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import resolvers from './graphql/resolver/index';

const server = new ApolloServer({
  typeDefs: importSchema(require.resolve('./graphql/schema/index.graphql')),
  resolvers,
});

server
  .listen(4003)
  .then(() => console.log('Server On ...'))
  .catch((error) => console.log(error));
