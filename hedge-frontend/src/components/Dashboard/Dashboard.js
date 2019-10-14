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
      filteredLeague3ManContest: [],
      contest5Man: [],
      filteredLeague5ManContest: [],
      contest9Man: [],
      filteredLeague9ManContest: [],
      sportSelected: "NFL",
      activeColor: false
    };
  }

  setSportForWhichContest = e => {
    this.setState({ sportSelected: e.target.value });
    //setting the color of the sports nav
    const currentState = this.state.activeColor;

    this.setState({ activeColor: !this.state.activeColor });
    console.log("current state", this.state.activeColor);

    let filtered3ManContestWithLeague = this.state.contest3Man.filter(
      contest => {
        return contest.leagueName == e.target.value;
      }
    );
    let filtered5ManContestWithLeague = this.state.contest5Man.filter(
      contest => {
        return contest.leagueName == e.target.value;
      }
    );
    let filtered9ManContestWithLeague = this.state.contest9Man.filter(
      contest => {
        return contest.leagueName == e.target.value;
      }
    );
    this.setState({
      filteredLeague3ManContest: filtered3ManContestWithLeague,
      filteredLeague5ManContest: filtered5ManContestWithLeague,
      filteredLeague9ManContest: filtered9ManContestWithLeague
    });
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
        {this.state.lobbySelected && (
          <Lobby
            contest3Man={this.state.filteredLeague3ManContest}
            contest5Man={this.state.filteredLeague5ManContest}
            contest9Man={this.state.filteredLeague9ManContest}
          />
        )}
      </div>
    );
  }
}
