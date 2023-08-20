import React, { useEffect, useState } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers";
import { loadUsers } from "./reducers/userReducer";
import { setLoading } from "./reducers/loadingReducer";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Filters from "./components/Filters";
import UsersList from "./components/UsersList";
import Pagination from "./components/Pagination";

export interface PaginationState {
  pageNumber: number;
  itemsPerPage: number;
  pageCount: number;
}

function App() {
  const dispatch = useDispatch();
  const  language  = useSelector((state: RootState) => state.language);
  const { i18n } = useTranslation();
  const [pagination, setPagination] = useState<PaginationState>({
    pageNumber: 1,
    itemsPerPage: 6,
    pageCount: 0,
  });

  useEffect(() => {
    dispatch(setLoading(true));
    fetch("./users.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadUsers(data));
      });
    dispatch(setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const increaseNumber = (): void => {
    setPagination((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber + 1,
    }));
  };
  const decreaseNumber = (): void => {
    setPagination((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber - 1,
    }));
  };

  return (
    <>
      <Header />
      <Filters />
      <UsersList setPagination={setPagination} pagination={pagination} />
      <Pagination
        pageNumber={pagination.pageNumber}
        pageCount={pagination.pageCount}
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
      />
    </>
  );
}

export default App;
