import "./lobby.css";
import React, { Component } from "react";
import Contest_Card from "../Contest_Card/Contest_Card";

export default class Lobby extends Component {
  //this method returns 3 man contest cards
  show3ManContest = () => {
    return this.props.contest3Man.map((contest, key) => {
      return (
        <Contest_Card
          key={key}
          leagueName={contest.leagueName}
          contestSize={contest.contestSize}
          contestLength={contest.contestLength}
          buyInAmount={contest.buyInAmount}
          payoutAmount={contest.payoutAmount}
        />
      );
    });
  };
  //this method returns 5 man contest cards
  show5ManContest = () => {
    return this.props.contest5Man.map((contest, key) => {
      return (
        <Contest_Card
          key={key}
          leagueName={contest.leagueName}
          contestSize={contest.contestSize}
          contestLength={contest.contestLength}
          buyInAmount={contest.buyInAmount}
          payoutAmount={contest.payoutAmount}
        />
      );
    });
  };
  //this method returns 9 man contest cards
  show9ManContest = () => {
    return this.props.contest9Man.map((contest, key) => {
      return (
        <Contest_Card
          key={key}
          leagueName={contest.leagueName}
          contestSize={contest.contestSize}
          contestLength={contest.contestLength}
          buyInAmount={contest.buyInAmount}
          payoutAmount={contest.payoutAmount}
        />
      );
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div className="all-contests-container">
        <div className="single-contest-container">
          <div className="contest-text">
            <p>3 Man</p>
          </div>
          {this.show3ManContest()}
        </div>
        <div className="single-contest-container">
          <div className="contest-text">
            <p>5 Man</p>
          </div>
          {this.show5ManContest()}
        </div>
        <div className="single-contest-container">
          <div className="contest-text">
            <p>9 Man</p>
          </div>
          {this.show9ManContest()}
        </div>
      </div>
    );
  }
}
