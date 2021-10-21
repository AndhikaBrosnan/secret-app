import { LIKE_POST, UNLIKE_POST, FETCH_LIKES } from "../type/likes";

const INITIAL_STATE = {
  likes: [],
};

const likeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIKES:
      return action.payload;
    case LIKE_POST:
      return { ...state, likes: action.payload };
    case UNLIKE_POST:
      return state;
    default:
      return state;
  }
};

export default likeReducer;
