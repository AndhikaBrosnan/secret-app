import { SIGN_IN, SIGN_OUT } from "../type/auth";

const INTIAL_STATE = {
  isSignedIn: null,
};

const authReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log("REDUCER sign_in", { ...state, isSignedIn: true });
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      console.log("REDUCER sign_out", { ...state, isSignedIn: false });
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;
