"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var graphql_import_1 = require("graphql-import");
var resolvers_1 = require("./graphql/resolvers");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var server = new apollo_server_1.ApolloServer({
    typeDefs: (0, graphql_import_1.importSchema)(require.resolve('./graphql/schema/index.graphql')),
    resolvers: resolvers_1.default,
    context: function () {
        return {
            prisma: prisma,
        };
    },
});
server
    .listen(process.env.SERVER_PORT)
    .then(function () { return console.log('Server On ...'); })
    .catch(function (error) { return console.log(error); });
