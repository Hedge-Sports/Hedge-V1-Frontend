import React, { Component } from "react";
import "./dashboard.css";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <nav>
          <div className="toggable-nav">
            <a>Lobby</a>
            <a>Secondary Market</a>
          </div>
          <div className="box-or-list-switch"></div>
        </nav>
      </div>
    );
  }
}
