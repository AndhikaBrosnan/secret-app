import { combineReducers } from "redux";
import { FETCH_POSTS, SUBMIT_FORM, SUBMIT_FORM_ERROR } from "../type/thread";
import { LIKE_POST, UNLIKE_POST } from "../type/likes";

const postReducers = (posts = [], action) => {
  console.log(posts);
  switch (action.type) {
    case FETCH_POSTS:
      return posts.concat(action.payload);
    case SUBMIT_FORM:
      return action.payload.concat(posts);
    case SUBMIT_FORM_ERROR:
      return posts;
    default:
      console.log("posts: ", posts);
      return posts;
  }
};

const likePostReducer = (like_id = [0], action) => {
  switch (action.type) {
    case LIKE_POST:
      const new_arr = [...like_id, action.payload];
      return new_arr;
    case UNLIKE_POST:
      const index = like_id.indexOf(action.payload);

      if (index > -1) {
        like_id.splice(index, 1);
      }

      return like_id;
    default:
      return like_id;
  }
};

export default combineReducers({
  posts: postReducers,
  likes: likePostReducer,
});
