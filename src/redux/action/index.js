import apiBackend from "../../apis/apiBackend";
import { LIKE_POST } from "../type/likes";

export const fetchPosts = async () => {
  try {
    const response = await apiBackend.get("/threads");
    return response.data;
  } catch (err) {
    return {
      message: "[ERROR] Fetch Posts",
    };
  }
};

export const fetchLikes = async () => {
  try {
    const response = await apiBackend.get("/threads/like");
    return response.data;
  } catch (err) {
    return {
      message: "[ERROR] Fetch Like",
    };
  }
};

export const postLike = async (dispatch, likedId, auth) => {
  let newLike = {
    threadId: auth.profile.getImageUrl(), //the liker avatar (as an ID)
    likedId: likedId, //the id of the thread (id on mongodb)
  };

  try {
    const response = await apiBackend.post("/threads/create-like", newLike);
    // const response = { data: newLike };
    console.log("LIKE_POST action", response.data);
    dispatch({
      type: LIKE_POST,
      payload: response.data,
    });
  } catch (err) {
    return {
      message: "[ERROR] post Like error",
    };
  }
};
