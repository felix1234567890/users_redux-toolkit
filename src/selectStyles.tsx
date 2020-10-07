import { Styles } from "react-select";

export default {
  menuList: (styles: Styles) => ({
    ...styles,
    color: "#ffffff",
    borderRadius: "0px 0px 6px 6px",
    overflow: "hidden",
    border: "1px solid #566273",
    position: "absolute",
    backgroundColor: "#212a38",
    left: 0,
    right: 0,
  }),
  control: (styles: Styles) => ({
    ...styles,
    position: "relative",
    width: "100%",
    textAlign: "left",
    outline: "",
    height: "47px",
    marginTop: "1rem",
  }),

  indicatorsContainer: (styles: Styles) => ({
    ...styles,
    marginLeft: "auto",
    height: "100%",
    marginTop: 0,
  }),
  singleValue: (styles: Styles) => ({
    ...styles,
    fontWeight: 500,
    paddingLeft: "8px",
    cursor: "pointer",
    userSelect: "none",
  }),
  option: (styles: Styles) => ({
    ...styles,
    ":hover": {
      backgroundColor: "purple",
    },
  }),
};
