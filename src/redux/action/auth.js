import { SIGN_IN, SIGN_OUT } from "../type/auth";

export const signIn = () => {
  console.log("sign in action");
  return { type: SIGN_IN };
};

export const signOut = () => {
  console.log("sign out action");
  return { type: SIGN_OUT };
};
