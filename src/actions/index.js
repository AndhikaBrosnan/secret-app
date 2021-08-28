export const postThread = (thread) => {
  console.log("action thread = ", thread);
  return {
    type: "SUBMIT_FORM",
    payload: postThread,
  };
};
