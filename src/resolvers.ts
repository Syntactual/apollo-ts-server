import { QueryResolvers } from './generated/graphql';
import { Config } from 'apollo-server';

const Query: QueryResolvers = {
  hello: () => 'hello world',
};

export const resolvers = {
  Query,
} as Config['resolvers'];
