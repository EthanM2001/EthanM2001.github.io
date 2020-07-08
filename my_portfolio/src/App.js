import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Progression from "./components/Progression";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Progression />
      <Contact />
    </div>
  );
}

export default App;
