import dotenv from 'dotenv';
import { resolvers } from './resolvers';
import { ApolloServer, gql } from 'apollo-server';
import { importSchema } from 'graphql-import';
const schema = importSchema('./src/schema.graphql');

const typeDefs = [
  gql`
    ${schema}
  `,
];
dotenv.config();

const port: string = process.env.PORT ? process.env.PORT.toString() : '4000';
export const serverStart = (): void => {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen({ port: port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

serverStart();
