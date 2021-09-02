export const postThread = (thread) => {
  console.log("action thread = ", thread);
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
