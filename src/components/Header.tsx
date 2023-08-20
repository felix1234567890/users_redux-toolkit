import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "../reducers/languageReducer";
import { filterUsers } from "../reducers/userReducer";

const Header = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const changeLanguage = (): void => {
    dispatch(setLanguage());
  };
  const searchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterUsers(e.target.value));
  };
  return (
    <header className="header">
      <div className="header__title">{t("headerTitle")}</div>
      <div className="header__search">
        <input
          type="search"
          placeholder={t("searchText")}
          onChange={searchUsers}
        />
      </div>
      <span onClick={changeLanguage} className="language">
        {t("lng")}
      </span>
    </header>
  );
};

export default Header;
