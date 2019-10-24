import React, { Component } from "react";
import "./player_selection_modal.css";

export default class Player_Selection_Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="player-selection-container">
        <h1 className=""></h1>
        <div>{this.props.children}</div>
        <div>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}
