import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,

  resolvers: {
    Query: {
      hello() {
        return 'Hello Wold';
      },
    },
  },
});

server
  .listen(4003)
  .then(() => console.log('Server On ...'))
  .catch((error) => console.log(error));
