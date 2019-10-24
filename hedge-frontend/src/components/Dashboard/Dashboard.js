import React, { Component } from "react";
import "./dashboard.css";
import dummeyData from "../Dummy";
import Lobby from "../Lobby/Lobby";
import Player_Selection_Modal from "../Player_Selection_Modal/Player_Selection_Modal";

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
      totalSports: [
        { index: 1, sportName: "All", value: "All" },
        { index: 2, sportName: "NFL", value: "NFL" },
        { index: 3, sportName: "NHL", value: "NHL" },
        { index: 4, sportName: "NBA", value: "NBA" },
        { index: 5, sportName: "MLB", value: "MLB" },
        {
          index: 6,
          sportName: "PGA",
          value: "PGA"
        },
        {
          index: 7,
          sportName: "Woman's Soccer",
          value: "WS"
        }
      ],
      sportSelected: 0,
      showPlayerModal: false
    };
  }

  //this method sets the selected sport option to the state so the color can be changed
  //this also filters the whole array of contests and breaks them down via sport selected
  setSportForWhichContest = singleSport => {
    this.setState({ sportSelected: singleSport.index });
    let filtered3ManContestWithLeague = this.state.contest3Man.filter(
      contest => {
        return contest.leagueName == singleSport.value;
      }
    );
    let filtered5ManContestWithLeague = this.state.contest5Man.filter(
      contest => {
        return contest.leagueName == singleSport.value;
      }
    );
    let filtered9ManContestWithLeague = this.state.contest9Man.filter(
      contest => {
        return contest.leagueName == singleSport.value;
      }
    );
    this.setState({
      filteredLeague3ManContest: filtered3ManContestWithLeague,
      filteredLeague5ManContest: filtered5ManContestWithLeague,
      filteredLeague9ManContest: filtered9ManContestWithLeague
    });
  };

  //this method filters the total array of contests via group size
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

  //this method toggle between the lobby view and the secondary market view
  handleLobbyAndSecondaryMarketToggle = event => {
    this.setState({
      lobbySelected: !this.state.lobbySelected,
      secondaryMarketSelected: !this.state.secondaryMarketSelected
    });
  };

  //this method toggle between the box and list view
  handleBoxOrListViewToggle = event => {
    this.setState({
      boxViewSelected: !this.state.boxViewSelected,
      listViewSelected: !this.state.listViewSelected
    });
  };

  //creates the sport option button components
  generateSportButtonComponents = () => {
    let totalSportsNames = this.state.totalSports;
    return totalSportsNames.map(singleSport => {
      console.log(singleSport.index, "single sport");
      return (
        <GenerateSportOption
          key={singleSport.index}
          value={singleSport.value}
          clicked={singleSport.index === this.state.sportSelected}
          sportName={singleSport.sportName}
          onClick={() => this.setSportForWhichContest(singleSport)}
        />
      );
    });
  };

  //toggle the state of the modal
  toggleStateOfModal = e => {
    this.setState({ showPlayerModal: true });
    // console.log("Worked", e.target);
  };

  closeTheModal = e => {
    this.setState({ showPlayerModal: false });
  };

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
          <ul>{this.generateSportButtonComponents()}</ul>
        </div>
        {this.state.lobbySelected && (
          <Lobby
            contest3Man={this.state.filteredLeague3ManContest}
            contest5Man={this.state.filteredLeague5ManContest}
            contest9Man={this.state.filteredLeague9ManContest}
            togglePlayerModalFunction={this.toggleStateOfModal}
          />
        )}
        <Player_Selection_Modal
          onClose={this.closeTheModal}
          show={this.state.showPlayerModal}
        />
      </div>
    );
  }
}

//this is a react component method that makes a button for a sport option
const GenerateSportOption = props => (
  <button
    className={`activeSport ${props.clicked ? "active" : "default"}`}
    value={props.value}
    onClick={props.onClick}
    clicked
  >
    {props.sportName}
  </button>
);
