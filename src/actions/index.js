import apiBackend from "../apis/apiBackend";

export const postThread = async (thread, dispatch) => {
  // disini post abis itu langsung refetch lagi di :)) #Thanks Riza
  // #1 Cari dulu gimana caranya bisa post. Re-fetch bisa pake componentDidUpdate

  // const headers = {
  //   "Content-Type": "application/json",
  // };

  // return (dispatch, getState) => {
  //   // dispatch({ type: "SUBMIT_FORM" });
  //   apiBackend.post("/threads/create", thread, { headers: headers }).then(
  //     (response) => dispatch({ type: "SUBMIT_FORM", payload: thread }),
  //     (error) => dispatch({ type: "REQUEST_FAILED", error: error })
  //   );
  // };
  console.log("what is dispatch: ", dispatch);
  console.log("so,what is thread: ", thread);
  try {
    const response = await apiBackend.post("/threads/create", thread);
    dispatch({ type: "SUBMIT_FORM", payload: response });
  } catch (err) {
    dispatch({ type: "SUBMIT_FORM_ERROR", payload: err });
  }

  // return {
  //   type: "SUBMIT_FORM",
  //   payload: thread,
  // };
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
  const response = await apiBackend.get("/threads");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
