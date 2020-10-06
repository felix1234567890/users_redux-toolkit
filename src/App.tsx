import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers";
import { setLanguage } from "./reducers/languageReducer";

function App() {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state);

  const changeLanguage = () => {
    dispatch(setLanguage());
  };
  useEffect(() => {
    console.log(language);
  }, [language]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={changeLanguage}>change</button>
    </div>
  );
}

export default App;
