import {combineReducers} from "redux";
import LoginReducer from "./LoginReducer";

export const rootReducer = combineReducers({
    Login: LoginReducer
})
