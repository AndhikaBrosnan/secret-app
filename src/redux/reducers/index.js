import { combineReducers } from "redux";

import authReducer from "./authReducer";
import postReducers from "./postReducers";
import likePostReducer from "./likePostReducer";

export default combineReducers({
  posts: postReducers,
  likes: likePostReducer,
  auth: authReducer,
});
