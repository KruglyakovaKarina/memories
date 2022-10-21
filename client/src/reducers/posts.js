import { POST_CREATE } from './constants';
import { POST_FETCH_ALL } from './constants';

const redusers = (posts = [], action) => {
  switch (action.type) {
    case POST_FETCH_ALL:
      return action.payload;
    case POST_CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default redusers;
