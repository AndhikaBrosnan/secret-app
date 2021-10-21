import {
  FETCH_POSTS,
  SUBMIT_FORM,
  SUBMIT_FORM_ERROR,
  RESET_POSTS,
} from "../type/thread";
import { fetchPosts } from ".";
import apiBackend from "../../apis/apiBackend";

export const fetchData = async (dispatch) => {
  const response = await fetchPosts();
  dispatch({ type: FETCH_POSTS, payload: response });
};

export const postThread = async (thread, auth) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  let newPost = {
    avatar: auth.profile.getImageUrl(),
    name: auth.profile.getName(),
    text: thread,
    likes: 0,
    createdAt: today.toDateString(),
    updatedAt: today.toDateString(),
    comments: [],
  };

  //questions:
  // 1. docs thread di parameter 1, dispatch di paramteter 2 itu di react aja/ semua node
  // 2. bedanya return sama dispatch apa kalo di action
  // 3. cara nge re-render threadlists
  // 4. kenapa harus 2 kali dispatch

  try {
    const response = await apiBackend.post("/threads/create", newPost);
    return response.data;
  } catch (err) {
    console.log("ERROR CATCH");
  }
};

export const submitFormAction = (response) => ({
  type: SUBMIT_FORM,
  payload: [response],
});

export const submitFormActionError = (err) => {
  return { type: SUBMIT_FORM_ERROR, payload: err };
};

export const resetData = () => {
  return { type: RESET_POSTS };
};
