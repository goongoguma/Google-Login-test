import api from "../api/api";
import axios from "axios";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const countryNews = country => {
  return async dispatch => {
    const res = await api.get(
      `?country=${country}&apiKey=8860cc5a37614d068811ab16e6c57978`
    );
    dispatch({
      type: "NEWS_HEADLINES",
      payload: res.data
    });
  };
};
