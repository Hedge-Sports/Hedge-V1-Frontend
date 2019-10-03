import React, { Component } from "react";
import "./dashboard.css";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <nav>
          <div className="toggable-nav">
            <input type="radio" name="radio" id="lobby" checked />
            <label for="lobby" className="lobby-option">
              <span>Lobby</span>
            </label>
            <input type="radio" name="radio" id="secondary-market" />
            <label for="secondary-market" className="secondary-market-option">
              <span>Secondary Market</span>
            </label>
          </div>
          <div className="box-or-list-switch">
            <input type="radio" name="second" id="list" />
            <label for="list" className="list-option">
              <span>
                <i class="fas fa-bars"></i>
              </span>
            </label>
            <input type="radio" name="second" id="box" />
            <label for="box" className="box-option">
              <span>
                <i class="fas fa-th-large"></i>
              </span>
            </label>
          </div>
        </nav>
        <div className="sports-options">
          <ul>
            <a>All</a>
            <a>NFL</a>
            <a>NHL</a>
            <a>NBA</a>
            <a>MLB</a>
            <a>PGA</a>
            <a>Women's Soccer</a>
          </ul>
        </div>
      </div>
    );
  }
}
