import React, { Component } from "react";
import "./contest_card.css";

export default class Contest_Card extends Component {
  render() {
    return (
      <div className="contest-card" onClick={this.props.onClick}>
        <img src="http://pluspng.com/img-png/nfl-logo-vector-png-nfl-logo-vector-logo-nfl-png-800.png" />
        <div className="contest-card-content">
          <div className="contest-card-top">
            <h5>
              {this.props.leagueName} {this.props.contestSize} Winner Takes All
            </h5>
            <p>{this.props.contestLength}</p>
          </div>
          <hr />
          <div className="contest-card-bottom">
            <p>
              <b>
                Buy-in <span>{this.props.buyInAmount}</span>
              </b>
            </p>
            <p>
              <b>
                Payout <span>{this.props.payoutAmount}</span>
              </b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
