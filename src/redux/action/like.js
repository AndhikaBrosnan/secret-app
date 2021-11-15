import { UNLIKE_POST, FETCH_LIKES } from "../type/likes";
import { fetchLikes } from ".";

export const fetchLikeData = async (dispatch) => {
  const response = await fetchLikes();
  dispatch({ type: FETCH_LIKES, payload: response });
};

export const unlikePost = (thread) => {
  return {
    type: UNLIKE_POST,
    payload: thread,
  };
};
