import { SIGN_IN, SIGN_OUT } from "../type/auth";

const INTIAL_STATE = {
  isSignedIn: null,
  profile: null,
};

const authReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log("REDUCER sign_in", {
        ...state,
        isSignedIn: true,
        profile: action.payload,
      });
      return { ...state, isSignedIn: true, profile: action.payload };
    case SIGN_OUT:
      console.log("REDUCER sign_out", {
        isSignedIn: false,
        profile: null,
      });
      return { isSignedIn: false, profile: null };
    default:
      return state;
  }
};

export default authReducer;
