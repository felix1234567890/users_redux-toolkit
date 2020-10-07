import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Select, { ValueType } from "react-select";
import { RootState } from "../reducers";
import { sortUsers } from "../reducers/userReducer";
import selectStyles from "../selectStyles";

export interface SortOrder {
  value: string;
  label: string;
}
const Filters = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { sortOrder } = useSelector((state: RootState) => state.users);

  const sort = (srtOrder: ValueType<SortOrder>) => {
    dispatch(sortUsers(srtOrder));
  };

  const options: SortOrder[] = [
    { value: "", label: t("none") },
    { value: "asc", label: t("ageAsc") },
    { value: "desc", label: t("ageDesc") },
    { value: "under40", label: t("ageUnder") },
    { value: "over40", label: t("ageOver") },
    { value: "male", label: t("male") },
    { value: "female", label: t("female") },
  ];
  return (
    <div className="sortBy">
      <span>{t("sortBy")} </span>
      <Select
        styles={selectStyles as any}
        defaultValue={options[0]}
        value={sortOrder}
        onChange={sort}
        options={options}
      />
    </div>
  );
};

export default Filters;
