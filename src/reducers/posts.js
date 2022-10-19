import { POST_CREATE } from './constants';
import { POST_FETCH_ALL } from './constants';

export default (posts = [], action) => {
  switch (action.type) {
    case POST_FETCH_ALL:
      return action.payload;
    case POST_CREATE:
      return posts;
    default:
      return posts;
  }
};
