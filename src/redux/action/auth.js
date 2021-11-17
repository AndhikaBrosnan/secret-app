import { SIGN_IN, SIGN_OUT } from "../type/auth";

export const signIn = (profile) => {
  return { type: SIGN_IN, payload: profile };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};
