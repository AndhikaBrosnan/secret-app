import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const postReducers = (posts = null, action) => {
  if (action.type === "FETCH_POSTS") {
    const new_arr = [...posts[0], action.payload.data];
    return new_arr;
  } else {
    return { 0: [] };
  }
};

const postThreadReducer = (postThread = null, action) => {
  if (action.type === "SUBMIT_FORM") {
    return action.payload;
  }

  return postThread;
};

const likePostReducer = (like_id = [0], action) => {
  if (action.type === "LIKE_POST") {
    const new_arr = [...like_id, action.payload];
    return new_arr;
  } else if (action.type === "UNLIKE_POST") {
    const index = like_id.indexOf(action.payload);

    if (index > -1) {
      like_id.splice(index, 1);
    }

    return like_id;
  }
  return like_id;
};

export default combineReducers({
  posts: postReducers,
  form: formReducer,
  postThread: postThreadReducer,
  likes: likePostReducer,
});
