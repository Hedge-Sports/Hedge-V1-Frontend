import React, { Component } from "react";
import "./player_selection_modal.css";

export default class Player_Selection_Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="player-selection-container">
        <div className="modal-nav-container">
          <ul className="modal-nav">
            <li>Lineup Options</li>
            <li>Rules/Scoring</li>
            <li>Active Users</li>
            <li>Pay Outs</li>
          </ul>
        </div>
        <div className="modal-content">test{this.props.children}</div>
        <div>
          <button
            className="close-player-modal-button"
            onClick={this.props.onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
