import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const postReducers = () => {
  return [
    {
      id: 0,
      avatar: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
      name: "Prof. Ross Geller",
      text: "Hai, I am a paleonthologist. I love Rachel, but she didn't love me back :(",
      likes: 3,
      date: "2021-04-09 15:30:21",
      comments: [
        "You sucks",
        "I don't care",
        "It's okay Ross, I love you babe",
      ],
    },
    {
      id: 1,
      avatar: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
      name: "Chandler M. Bing",
      text: "Hey!. I'm afraid, the girl I text online is a fat bald guy!",
      likes: 16,
      date: "2021-04-10 11:20:11",
      comments: ["LMAO", "HAHAHA"],
    },
    {
      id: 2,
      avatar: "https://react.semantic-ui.com/images/avatar/large/stevie.jpg",
      name: "Phoebe Buffe",
      text: "I found a human thumb in my soda can and the soda company pay me $7000 what a crappy day.",
      likes: 100,
      date: "2021-05-10 16:20:11",
      comments: [
        "wait, what?!",
        "Can I have some amount of money please",
        "Buy a car phoeb",
        "Now you have a plan, phoeb!",
      ],
    },
  ];
};

// const likesReducer = () => {
//   return [0];
// };

const postThreadReducer = (postThread = null, action) => {
  if (action.type === "SUBMIT_FORM") {
    console.log("submit_form never called");
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
