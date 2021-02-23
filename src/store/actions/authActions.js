import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";

const setUser = (token) => {
  localStorage.setItem("token", token);
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime < user.exp) {
      dispatch(setUser(token));
    } else {
      dispatch(signout());
    }
  }
};
