import { FETCH_POSTS } from "../type/thread";
import { fetchPosts } from ".";

export const fetchData = async (dispatch) => {
  const response = await fetchPosts();
  console.log(response);

  dispatch({ type: FETCH_POSTS, payload: response });
};
