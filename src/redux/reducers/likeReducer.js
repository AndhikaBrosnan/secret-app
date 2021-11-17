import { LIKE_POST, UNLIKE_POST, FETCH_LIKES } from "../type/likes";

const INITIAL_STATE = [];

const likeReducer = (likes = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIKES:
      likes.push(...action.payload);
      return likes;
    case LIKE_POST:
      return likes.concat(action.payload);
    case UNLIKE_POST:
      return likes;
    default:
      return likes;
  }
};

export default likeReducer;
