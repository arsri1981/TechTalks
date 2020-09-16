import axios from "axios";
import { decode } from "jsonwebtoken";
import { constants } from "../../config";
import { api, success, error } from "./services.common";

export const checkLoginAPI = () => {
  let token = localStorage.getItem(constants.KEY_AUTH_TOKEN)
  if (token === undefined || token === null) {
    return {
      loggedIn: false
    };
  }
  else {
    // check if token is expired
    let jsonToken = decode(token)
    if (jsonToken.exp < (new Date().getTime() + 1) / 1000) {
      return {
        loggedIn: false
      };
    }
    else {
      return {
        loggedIn: true,
        userName: localStorage.getItem(constants.KEY_USER_NAME)
      };
    }
  }
}

export const loginAuthenticationAPI = async (username, password) => {
  try {
    let response = await axios.post(`${api}authenticate/login`, { username, password });
    const credentials = response.data;

    // save token
    localStorage.setItem(constants.KEY_AUTH_TOKEN, credentials.token);
    localStorage.setItem(constants.KEY_USER_NAME, credentials.userName);

    return success(credentials);
  }
  catch (e) {
    console.log(e);
    return error(e);
  }
};

export const signupAuthenticationAPI = async (email, password, usertype) => {
  try {
    let response = await axios.post(`${api}/users/signup`, { email, password, usertype });
    const credentials = response.data;

    // save token
    localStorage.setItem(constants.KEY_AUTH_TOKEN, credentials.token);
    localStorage.setItem(constants.KEY_USER_TYPE, credentials.userType);

    return success(credentials);
  }
  catch (e) {
    console.log(e);
    return error(e);
  }
};

export const logoutUserAPI = () => {
  localStorage.clear();
  return true;
}