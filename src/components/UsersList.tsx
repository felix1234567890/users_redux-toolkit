import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { PaginationState } from "../App";
import { RootState } from "../reducers";
import { User } from "../reducers/userReducer";
import UserItem from "./UserItem";

interface UsersListProps {
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
}

const UsersList: FC<UsersListProps> = ({ pagination, setPagination }) => {
  const [shownUsers, setShownUsers] = useState<User[]>([]);
  const {
    loading,
    users: { users, filteredUsers, search, sortOrder },
  } = useSelector((state: RootState) => state);

  const paginateUsers = (
    users: User[],
    pageNumber: number = 1,
    itemsPerPage: number = 6
  ) => {
    const skip = (pageNumber - 1) * itemsPerPage;
    if (users.length > 0) {
      const shownUsers = users.slice(skip, skip + itemsPerPage);
      return shownUsers;
    } else return [];
  };

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageNumber: pagination.pageNumber,
    }));
    if (search || sortOrder.value !== "") {
      setShownUsers(paginateUsers(filteredUsers, pagination.pageNumber));
    } else {
      setShownUsers(paginateUsers(users, pagination.pageNumber));
    }
  }, [
    pagination.pageNumber,
    setPagination,
    users,
    filteredUsers,
    search,
    sortOrder.value,
  ]);

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageNumber: 1,
      pageCount: Math.ceil(filteredUsers.length / prevState.itemsPerPage),
    }));
    setShownUsers(paginateUsers(filteredUsers));
  }, [filteredUsers, setPagination]);

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageNumber: 1,
      pageCount: Math.ceil(users.length / prevState.itemsPerPage),
    }));
    setShownUsers(paginateUsers(users));
  }, [setPagination, users]);

  return (
    <div className="container">
      {loading && <h1>Loading...</h1>}
      <section className="card-row">
        {shownUsers.length > 0 ? (
          shownUsers.map((user: User, index: number) => {
            return <UserItem {...user} key={index} />;
          })
        ) : (
          <h1>No users to show</h1>
        )}
      </section>
    </div>
  );
};

export default UsersList;
