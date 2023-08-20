import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleValue } from "react-select";
import { SortOrder } from "../components/Filters";

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
    sortUsers(state, action: PayloadAction<SingleValue<SortOrder>>) {
      const { value } = action.payload as SortOrder;
      let sortedUsers;
      switch (value) {
        case "desc":
          sortedUsers = state.users.sort((a: User, b: User) => {
            return b.age - a.age;
          });
          break;
        case "asc":
          sortedUsers = state.users.sort((a: User, b: User) => {
            return a.age - b.age;
          });
          break;
        case "under40":
          sortedUsers = state.users
            .filter((user: User) => user.age < 40)
            .sort((a: User, b: User) => a.age - b.age);
          break;
        case "over40":
          sortedUsers = state.users
            .filter((user: User) => user.age > 40)
            .sort((a: User, b: User) => a.age - b.age);
          break;
        case "female":
          sortedUsers = state.users.filter(
            (user: User) => user.gender === "female"
          );
          break;
        case "male":
          sortedUsers = state.users.filter(
            (user: User) => user.gender === "male"
          );
          break;
        default:
          sortedUsers = state.users;
      }
      state.filteredUsers = sortedUsers;
    },
  },
});

export default usersSlice.reducer;

export const { loadUsers, filterUsers, sortUsers } = usersSlice.actions;
