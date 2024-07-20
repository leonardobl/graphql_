import { PostQuery } from '../Post';
import { UserQuery } from '../User';

export default {
  Query: {
    ...UserQuery,
    ...PostQuery,
  },
};
