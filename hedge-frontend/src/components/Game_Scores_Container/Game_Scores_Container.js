import "./game_scores_container.css";
import React from "react";

export default function Game_Scores_Container(props) {
  let getTheLiveMatches = () => {
    let allLiveMatches = props.liveMatches;
    return allLiveMatches.map((match, i) => {
      return (
        <div className="card-container">
          <div className="home-team">
            <p>{match.hometeam.name}</p>
            <p>{match.hometeam.totalscore}</p>
          </div>
          <div className="away-team">
            <p>{match.awayteam.name}</p>
            <p>{match.awayteam.totalscore}</p>
          </div>
        </div>
      );
    });
  };
  return <div className="game-scores-container">{getTheLiveMatches()}</div>;
}
