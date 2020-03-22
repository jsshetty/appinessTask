import { AUTH_START, LOGOUT } from "./actionTypes";

const initialState = {
    loginStatus: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGOUT:
        return {
            ...state,
            loginStatus: false,
        }
        case AUTH_START:
        return {
            ...state,
            loginStatus: true,
        }
        default: return state;
    }
}

export default reducer