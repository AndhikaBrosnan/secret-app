import { FETCH_POSTS, SUBMIT_FORM, SUBMIT_FORM_ERROR } from "../type/thread";

const postReducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return posts.concat(action.payload);
    case SUBMIT_FORM:
      return action.payload.concat(posts);
    case SUBMIT_FORM_ERROR:
      return posts;
    default:
      return posts;
  }
};

export default postReducers;
