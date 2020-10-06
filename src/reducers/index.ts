import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./languageReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  language: languageReducer,
  users: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
