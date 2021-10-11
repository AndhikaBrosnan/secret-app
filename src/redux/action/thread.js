import {
  FETCH_POSTS,
  SUBMIT_FORM,
  SUBMIT_FORM_ERROR,
  RESET_POSTS,
} from "../type/thread";
import { fetchPosts } from ".";

export const fetchData = async (dispatch) => {
  const response = await fetchPosts();
  // console.log(response);
  dispatch({ type: FETCH_POSTS, payload: response });
};

export const submitFormAction = (response) => ({
  type: SUBMIT_FORM,
  payload: [response],
});

export const submitFormActionError = (err) => {
  return { type: SUBMIT_FORM_ERROR, payload: err };
};

export const resetData = () => {
  console.log("reset data action");
  return { type: RESET_POSTS };
};
