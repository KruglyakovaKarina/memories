import * as api from '../api';
import { POST_FETCH_ALL } from '../reducers/constants';

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: POST_FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export default getPosts;
