import {
  POST_CREATE,
  POST_FETCH_ALL,
  POST_UPDATE,
  POST_DELETE,
  POST_LIKE,
} from './constants';

const redusers = (posts = [], action) => {
  switch (action.type) {
    case POST_DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case POST_UPDATE:
    case POST_LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case POST_FETCH_ALL:
      return action.payload;
    case POST_CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default redusers;
