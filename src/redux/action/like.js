import { LIKE_POST, UNLIKE_POST, FETCH_LIKES } from "../type/likes";
import { fetchLikes } from ".";

export const fetchLikeData = async (dispatch) => {
  const response = await fetchLikes();
  dispatch({ type: FETCH_LIKES, payload: response });
};

export const likePostData = (thread) => {
  return {
    type: LIKE_POST,
    payload: thread,
  };
};

export const unlikePost = (thread) => {
  return {
    type: UNLIKE_POST,
    payload: thread,
  };
};
