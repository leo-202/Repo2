import Home from "./Home.js";
import Forms from "./Forms.js";
import Header from "./Header.js";
import MainDropdown from "./MainDropdown.js";
import { useState } from "react";

const App = () => {
  const [screen, setScreen] = useState("home");
  const HandleScreens = () => {
    if (screen === "home") {
      return (
        <>
          <Home setScreen={(e) => setScreen(e)} screen={screen} />
        </>
      );
    }
    if (screen === "forms") {
      return (
        <>
          <Forms setScreen={(e) => setScreen(e)} />
        </>
      );
    }
  };
  return (
    <>
      <MainDropdown setScreen={(e) => setScreen(e)} screen={screen} />
      <Header setScreen={(e) => setScreen(e)} screen={screen} />
      <HandleScreens />
    </>
  );
};

export default App;
