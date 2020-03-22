import { AUTH_START } from "./actionTypes";

export const authStart = (data) => {
    return {
        type: AUTH_START,
        auth: data
    }
}