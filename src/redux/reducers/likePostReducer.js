import { LIKE_POST, UNLIKE_POST } from "../type/likes";

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

export default likePostReducer;
