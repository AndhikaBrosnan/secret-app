import apiBackend from "../apis/apiBackend";

export const submitFormAction = (thread) => {
  return { type: "SUBMIT_FORM", payload: thread };
};

export const submitFormActionError = (err) => {
  return { type: "SUBMIT_FORM_ERROR", payload: err };
};

export const postThread = async (thread) => {
  console.log("thread di action", thread);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  let newPost = {
    avatar: "https://semantic-ui.com/images/avatar2/large/kristy.png",
    name: "Anonymous",
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

  console.log("so,what is thread: ", thread);
  try {
    const response = await apiBackend.post("/threads/create", newPost); //error disini. awaitnya
    console.log("try api backend: ", response);
    return response.data;
    // dispatch(submitFormAction(thread));
    // fetchPosts();

    //re-fetch
  } catch (err) {
    console.log("ERROR CATCH");
    // dispatch(submitFormActionError(err));
  }
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

// export const fetchPosts = async () => {
//   const response = apiBackend.get("/threads");

//   return { type: "FETCH_POSTS", payload: response.data };
// };

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
