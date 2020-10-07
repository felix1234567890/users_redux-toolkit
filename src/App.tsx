import React, { useEffect, useState } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers";
import { loadUsers } from "./reducers/userReducer";
import { setLoading } from "./reducers/loadingReducer";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import Header from "./components/Header";
import Filters from "./components/Filters";
import UsersList from "./components/UsersList";

export interface PaginationState {
  pageNumber: number;
  itemsPerPage: number;
  pageCount: number;
}

function App() {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state);
  const { i18n }: UseTranslationResponse = useTranslation();
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

  return (
    <>
      <Header />
      <Filters />
      <UsersList setPagination={setPagination} pagination={pagination} />
    </>
  );
}

export default App;
