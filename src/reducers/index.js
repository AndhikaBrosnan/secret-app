import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const postReducers = (posts = { 0: [] }, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      posts = [...posts[0], action.payload.data];
      console.log("my post on fetch: ", posts);
      return posts;
    case "SUBMIT_FORM":
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);

      let newPost = {
        avatar: "https://semantic-ui.com/images/avatar2/large/kristy.png",
        name: "Anonymous",
        text: action.payload,
        likes: 0,
        createdAt: today.toDateString(),
        updatedAt: today.toDateString(),
        comments: [],
      };

      posts[0] = [...posts[0], newPost];
      return posts;
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
