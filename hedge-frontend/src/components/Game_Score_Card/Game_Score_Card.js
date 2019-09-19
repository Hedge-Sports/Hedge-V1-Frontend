import "./game_score_card.css";

import React from "react";

export default function Game_Score_Card() {
  return (
    <div className="card-container">
      <div className="home-team">
        <p>{this.props.liveMatches.hometeam.name}</p>
      </div>
      <div className="away-team">
        <p>{this.props.liveMatches.awayteam.name}</p>
      </div>
    </div>
  );
}
