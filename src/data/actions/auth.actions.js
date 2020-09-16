import { loginAuthenticationAPI, signupAuthenticationAPI, checkLoginAPI, logoutUserAPI } from "../services/auth.service";

export const CHECK_LOGIN = "CHECK_LOGIN"
export const USER_LOGGEDIN = "USER_LOGGEDIN"
export const USER_UNAUTHORIZED = "USER_UNAUTHORIZED"

export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const SIGNUP_USER = "SIGNUP_USER"
export const SIGNUP_SUCCESSFUL = "SIGNUP_SUCCESSFUL"
export const SIGNUP_FAILED = "SIGNUP_FAILED"

export const LOGOUT_USER = "LOGOUT_USER"

export const loginUser = (credentials) => {
    return async (dispatch) => {
        dispatch(loginLoadingAction())
        let response = await loginAuthenticationAPI(credentials.username, credentials.password);
        if (response.isSuccessful) {
            dispatch(loginSuccessfulAction(response.data))
        }
        else {
            dispatch(loginFailedAction(response.data))
        }
    }
}

export const signupUser = (credentials) => {
    return async (dispatch) => {
        dispatch(signupLoadingAction())
        let response = await signupAuthenticationAPI(credentials.username, credentials.password, credentials.userType);
        if (response.isSuccessful) {
            dispatch(signupSuccessfulAction(response.data))
        }
        else {
            dispatch(signupFailedAction(response.data))
        }
    }
}

export const checkLogin = () => {
    return (dispatch) => {
        let loginInfo = checkLoginAPI();
        if (loginInfo.loggedIn) {
            dispatch(userLoggedInAction(loginInfo))
        }
        else {
            dispatch(userUnauthorizedAction)
        }
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        logoutUserAPI();
        dispatch(userUnauthorizedAction())
    }
}

const userLoggedInAction = (loginInfo) => {
    return {
        type: USER_LOGGEDIN,
        payload: {
            loggedIn: true,
            userType: loginInfo.userType
        }
    }
}

const userUnauthorizedAction = () => {
    return {
        type: USER_UNAUTHORIZED,
        payload: {
            loggedIn: false
        }
    }
}

const loginLoadingAction = () => {
    return {
        type: LOGIN_USER
    }
}

const signupLoadingAction = () => {
    return {
        type: SIGNUP_USER
    }
}

function loginSuccessfulAction(responseData) {
    return {
        type: LOGIN_SUCCESSFUL,
        payload: {
            loggedIn: true,
            token: responseData.token,
            userName: responseData.userName
        }
    }
}

function loginFailedAction(errorMessage) {
    return {
        type: LOGIN_FAILED,
        payload: {
            loggedIn: false,
            errorMessage: errorMessage.message
        }
    }
}

function signupSuccessfulAction(responseData) {
    return {
        type: SIGNUP_SUCCESSFUL,
        payload: {
            loggedIn: true,
            token: responseData.token,
            userType: responseData.userType
        }
    }
}

function signupFailedAction(errorMessage) {
    return {
        type: SIGNUP_FAILED,
        payload: {
            loggedIn: false,
            errorMessage: errorMessage.message
        }
    }
}