import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Form from "./component/Form";
import Sponser from "./component/Sponsore";
import HeadinhText from "./component/HeadingText";
import Group from "./component/Group";
import Home from "./pages/Home";
import { useCallback, useMemo, useState } from "react";
import Benifits from "./pages/Benifits";
function App() {
  return (
    <>
      {/* <Home /> */}
      <Benifits />
    </>
  );
}

export default App;
