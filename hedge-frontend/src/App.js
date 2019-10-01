import logo from "./logo.svg";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import GameScoresContainer from "./components/Game_Scores_Container/Game_Scores_Container";
import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LiveMatches: [],
      TeamLogos: []
    };
  }

  getTheLiveScores = () => {
    axios
      .get(
        "http://www.goalserve.com/getfeed/ea6b5a174377459cabb53a6076e2458f/football/nfl-scores?json=1"
      )
      .then(response => {
        this.setState({
          LiveMatches: response.data.scores.category.match
        });
        console.log(this.state.LiveMatches);
      })
      .catch(err => {
        console.log(err);
      });
  };

  getTheTeamImages = () => {
    axios
      .get(
        "http://www.goalserve.com/getfeed/ea6b5a174377459cabb53a6076e2458f/football/atl_rosters?json=1"
      )
      .then(response => {
        this.setState({ TeamLogos: response.data.team });
        console.log("Team Logos", this.state.TeamLogos);
      });
  };

  componentDidMount() {
    this.getTheLiveScores();
    this.getTheTeamImages();
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <GameScoresContainer
          liveMatches={this.state.LiveMatches}
          teamImages={this.state.TeamLogos}
        />
        <Dashboard />
      </div>
    );
  }
}
