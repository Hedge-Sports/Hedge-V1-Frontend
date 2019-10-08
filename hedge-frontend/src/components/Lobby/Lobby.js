import "./lobby.css";
import React, { Component } from "react";
import Contest_Card from "../Contest_Card/Contest_Card";

export default class Lobby extends Component {
  render() {
    return (
      <div className="all-contests-container">
        <div className="3-man-container">test</div>
        <div className="5-man-container"></div>
        <div className="9-man-container"></div>
      </div>
    );
  }
}
