import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: "en",
  reducers: {
    setLanguage(state) {
      return state === "en" ? "hr" : "en";
    },
  },
});
export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;
