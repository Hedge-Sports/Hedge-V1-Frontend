import "./game_scores_container.css";
import React from "react";

export default function Game_Scores_Container(props) {
  let getTheLiveMatches = () => {
    let baseStr64 = props.teamImages;
    //just query select the image tag and add this attribute
    // imgElem.setAttribute("src", "data:image/jpg;base64," + baseStr64);
    let allLiveMatches = props.liveMatches;
    let teamImage = props.teamImages;
    return allLiveMatches.map((match, i) => {
      return (
        <div className="card-container">
          <div className="home-team">
            <div>
              {/* <img src={teamImage} /> */}
              <p>{match.hometeam.name}</p>
            </div>
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
