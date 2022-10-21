import * as api from '../api';
import { POST_FETCH_ALL } from '../reducers/constants.js';
import { POST_CREATE } from '../reducers/constants.js';

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: POST_FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export default getPosts;

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: POST_CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
