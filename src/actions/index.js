import jsonBackend from "../apis/jsonBackend";

export const postThread = (thread) => {
  return {
    type: "SUBMIT_FORM",
    payload: thread,
  };
};

export const likePost = (thread) => {
  return {
    type: "LIKE_POST",
    payload: thread,
  };
};

export const unlikePost = (thread) => {
  return {
    type: "UNLIKE_POST",
    payload: thread,
  };
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonBackend.get("/threads");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
