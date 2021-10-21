import { combineReducers } from "redux";

import authReducer from "./authReducer";
import postReducers from "./postReducers";
import likeReducer from "./likeReducer";

export default combineReducers({
  posts: postReducers,
  likes: likeReducer,
  auth: authReducer,
});
