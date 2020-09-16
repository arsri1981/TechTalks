import { USER_LOGGEDIN, USER_UNAUTHORIZED, LOGIN_USER, LOGIN_SUCCESSFUL, LOGIN_FAILED,
    SIGNUP_USER, SIGNUP_SUCCESSFUL, SIGNUP_FAILED } 
from "../actions/auth.actions";

// initial auth state
const initialState = {}

export default function auth(state = initialState, action) {
switch(action.type) {
    case USER_LOGGEDIN:
        return { ...state, ...action.payload }
    case USER_UNAUTHORIZED:
        return { ...state, ...action.payload }            
    case LOGIN_USER:
        return { ...state, loading: true }
    case LOGIN_SUCCESSFUL:
        return { ...state, ...action.payload, loading: false }
    case LOGIN_FAILED:
        return { ...state, ...action.payload, loading: false }
    case SIGNUP_USER:
        return { ...state, loading: false }
    case SIGNUP_SUCCESSFUL:
        return { ...state, ...action.payload, loading: false }
    case SIGNUP_FAILED:
        return { ...state, ...action.payload, loading: false }
    default:
        return state;
}
}