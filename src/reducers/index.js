import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const postReducers = (posts = [], action) => {
  console.log(posts);
  switch (action.type) {
    case "FETCH_POSTS":
      return posts.concat(action.payload);
    case "SUBMIT_FORM":
      return action.payload.concat(posts);
    case "SUBMIT_FORM_ERROR":
      return posts;
    default:
      console.log("posts: ", posts);
      return posts;
  }
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
  likes: likePostReducer,
});
