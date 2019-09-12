import React from "react";
import logo from "./logo.svg";
import Nav from "./components/Nav/Nav";
import GameScoresContainer from "./components/Game_Scores_Container/Game_Scores_Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <GameScoresContainer />
    </div>
  );
}

export default App;
