export const postThread = (thread) => {
  return {
    type: "POST_THREAD",
    payload: thread,    
  };
};
