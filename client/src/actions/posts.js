import * as api from '../api';
import {
  POST_DELETE,
  POST_FETCH_ALL,
  POST_UPDATE,
  POST_CREATE,
} from '../reducers/constants.js';

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

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: POST_UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: POST_DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: POST_UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
