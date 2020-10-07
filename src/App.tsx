import React, { useEffect } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers";
import { loadUsers } from "./reducers/userReducer";
import { setLoading } from "./reducers/loadingReducer";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state);
  const { i18n }: UseTranslationResponse = useTranslation();

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

  return <Header />;
}

export default App;
