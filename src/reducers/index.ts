import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./languageReducer";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  users: userReducer,
  language: languageReducer,
  loading: loadingReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
