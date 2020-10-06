import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    search: "",
    sortOrder: { value: "", label: "None" },
    filteredUsers: [],
  },
  reducers: {},
});
export default usersSlice.reducer;
