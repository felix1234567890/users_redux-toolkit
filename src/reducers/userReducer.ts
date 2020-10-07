import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  country: string;
  photo: string;
  gender: string;
  age: number;
}

interface StateData {
  users: User[];
  search: string;
  sortOrder: { value: string; label: string };
  filteredUsers: User[];
}

let initialState: StateData = {
  users: [],
  search: "",
  sortOrder: { value: "", label: "None" },
  filteredUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers(state, { payload }: PayloadAction<User[]>) {
      state.users = payload;
    },
    filterUsers(state, { payload }: PayloadAction<string>) {
      state.search = payload;
      const val = new RegExp(state.search.toLowerCase(), "g");
      const users = state.users.filter((user: User) => {
        if (user.country.toLowerCase().match(val)) return true;
        return false;
      });
      users.sort((a: any, b: any) => a.country - b.country);
      state.filteredUsers = users;
    },
  },
});

export default usersSlice.reducer;

export const { loadUsers, filterUsers } = usersSlice.actions;
