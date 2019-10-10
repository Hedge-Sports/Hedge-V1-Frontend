import React, { Component } from "react";
import "./dashboard.css";
import dummeyData from "../Dummy";
import Lobby from "../Lobby/Lobby";
// import { NavLink } from "react-router-dom";
//This is the main dashboard that holds the lobby and secondary market components
// it holds the states for the contests
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lobbySelected: true,
      secondaryMarketSelected: false,
      boxViewSelected: true,
      listViewSelected: false,
      dummyData: dummeyData,
      contest3Man: [],
      contest5Man: [],
      contest9Man: [],
      sportSelected: "NFL"
    };
  }

  setSportForWhichContest = e => {
    this.setState({ sportSelected: e.target.value });
    console.log("sport selected", this.state.sportSelected);
  };

  filterContestData = contests => {
    contests.map(singleContest => {
      if (singleContest.contestSize === "3-Man") {
        this.state.contest3Man.push(singleContest);
      } else if (singleContest.contestSize === "5-Man") {
        this.state.contest5Man.push(singleContest);
      } else {
        this.state.contest9Man.push(singleContest);
      }
    });
  };

  handleLobbyAndSecondaryMarketToggle = event => {
    this.setState({
      lobbySelected: !this.state.lobbySelected,
      secondaryMarketSelected: !this.state.secondaryMarketSelected
    });
  };

  handleBoxOrListViewToggle = event => {
    this.setState({
      boxViewSelected: !this.state.boxViewSelected,
      listViewSelected: !this.state.listViewSelected
    });
  };

  handleListOrBoxToggle = event => {};

  componentDidMount() {
    this.filterContestData(this.state.dummyData);
  }

  render() {
    return (
      <div className="dashboard-container">
        <nav>
          <div className="toggable-nav">
            <input
              type="radio"
              name="lobbySelected"
              id="lobby"
              checked={this.state.lobbySelected}
              onChange={e => this.handleLobbyAndSecondaryMarketToggle(e)}
            />
            <label for="lobby" className="lobby-option">
              <span>Lobby</span>
            </label>
            <input
              type="radio"
              name="secondaryMarketSelected"
              id="secondary-market"
              checked={this.state.secondaryMarketSelected}
              onChange={e => this.handleLobbyAndSecondaryMarketToggle(e)}
            />
            <label for="secondary-market" className="secondary-market-option">
              <span>Secondary Market</span>
            </label>
          </div>
          <div className="box-or-list-switch">
            <input
              type="radio"
              name="second"
              id="list"
              checked={this.state.listViewSelected}
              onChange={e => this.handleBoxOrListViewToggle(e)}
            />
            <label for="list" className="list-option">
              <span>
                <i class="fas fa-bars"></i>
              </span>
            </label>
            <input
              type="radio"
              name="second"
              id="box"
              checked={this.state.boxViewSelected}
              onChange={e => this.handleBoxOrListViewToggle(e)}
            />
            <label for="box" className="box-option">
              <span>
                <i class="fas fa-th-large"></i>
              </span>
            </label>
          </div>
        </nav>
        <div className="sports-options">
          <ul>
            <button value="All" onClick={e => this.setSportForWhichContest(e)}>
              All
            </button>
            <button value="NFL" onClick={e => this.setSportForWhichContest(e)}>
              NFL
            </button>
            <button value="NHL" onClick={e => this.setSportForWhichContest(e)}>
              NHL
            </button>
            <button value="NBA" onClick={e => this.setSportForWhichContest(e)}>
              NBA
            </button>
            <button value="MLB" onClick={e => this.setSportForWhichContest(e)}>
              MLB
            </button>
            <button value="PGA" onClick={e => this.setSportForWhichContest(e)}>
              PGA
            </button>
            <button value="WS" onClick={e => this.setSportForWhichContest(e)}>
              Woman's Soccer
            </button>
          </ul>
        </div>
        {this.state.sportSelected && this.state.lobbySelected && (
          <Lobby
            contest3Man={this.state.contest3Man}
            contest5Man={this.state.contest5Man}
            contest9Man={this.state.contest9Man}
          />
        )}
      </div>
    );
  }
}
