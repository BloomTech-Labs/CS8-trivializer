import React, { Component } from "react";

import {
  GameWrapper,
  ListWrapper,
  AddIcon,
  AddIconWrapper,
  Text,
  TextWrapper,
  NewGameButton,
  NewGameDiv,
  ButtonWrapper,
  NewWrapper,
  NameWrapper,
  PositionMenu,
  NGW
} from "./primitives/GameList";

import { Hamburger, NavText, NavUl, NavLi } from "./primitives/Nav";

import requireAuth from "../hoc/requireAuth";

import { connect } from "react-redux";
import { compose } from "react";
import { addGame, getGames, signOut } from "../actions";
import { withRouter } from "react-router";

import GameCard from "./GameCard";
import NewCard from "./NewCard";
import Spinner from "../components/UI/Spinner.js";

import Nav from "./UI/Nav";

import "./primitives/css/GameList.css";

import jwt_decode from "jwt-decode";

import plus from "../assets/bluePlus.svg";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_type: null,
      menu: false
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const userId = decoded.sub;

    this.props.getGames(userId);
    this.setState({ user_type: decoded.user_type });
    console.log("USER TYPE", decoded.user_type);
    console.log("USER ID", decoded.sub);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
    this.setState({ menu: true });
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.setState({ menu: false });
  }

  addGameHandler = userId => {
    this.props.addGame(userId, id => {
      this.props.history.push(`/create-game/${id}`);
    });
  };

  logOut = async event => {
    await this.props.signOut();
    this.props.history.push("/");
  };

  homeRouteClick = () => {
    this.props.history.push("/");
  };

  render() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const userId = decoded.sub;

    let renderList;

    let list = this.props.storedGames.map((g, i) => {
      return (
        <GameCard
          key={g._id}
          id={g._id}
          gameId={g._id}
          created={g.createdAt}
          name={g.name}
          logo={g.logo}
          date={g.date}
        />
      );
    });

    if (this.state.user_type === "Tier 2") {
      renderList = list;
    }

    if (this.state.user_type === "Tier 1") {
      renderList = list.slice(0, 10);
    }

    if (this.state.user_type === "Free") {
      renderList = list.slice(0, 1);
    }

    let hide;
    if (this.props.storedGames.length >= 1 && this.state.user_type === "Free") {
      // && this.state.user_type === "Free"
      hide = { display: "none" };
    }

    if (
      this.props.storedGames.length >= 10 &&
      this.state.user_type === "Tier 1"
    ) {
      // && this.state.user_type === "Free"
      hide = { display: "none" };
    }

    if (this.props.fetchingGames === true) {
      renderList = <Spinner />;
    }

    let newGame;

    if (this.props.storedGames.length >= 1) {
      newGame = (
        <NewWrapper style={hide}>
          <NewCard className="tracking-out-contract">
            <TextWrapper>
              <NameWrapper> New Game </NameWrapper>
            </TextWrapper>
            <AddIconWrapper>
              <AddIcon
                className="pulsate-fwd"
                src={plus}
                onClick={() => this.addGameHandler(userId)}
              />
            </AddIconWrapper>
          </NewCard>
        </NewWrapper>
      );
    }

    if (this.props.storedGames < 1) {
      newGame = (
        <NewGameDiv className="tracking-out-contract">
          <NGW>NEW GAME</NGW>
          <NewGameButton
            src={plus}
            onClick={() => this.addGameHandler(userId)}
            className="pulsate-fwd"
          />
        </NewGameDiv>
      );
    }
    let hamburger;

    if (this.state.menu === true) {
      hamburger = (
        <Hamburger
          onClick={() => (this.state.menu ? this.closeNav() : this.openNav())}
          class="col"
        >
          <div class="con">
            <div class="bar arrow-top-r" />
            <div class="bar arrow-middle-r" />
            <div class="bar arrow-bottom-r" />
          </div>
        </Hamburger>
      );
    }

    if (this.state.menu === false) {
      hamburger = (
        <Hamburger
          onClick={() => (this.state.menu ? this.closeNav() : this.openNav())}
          class="col"
        >
          <div class="con">
            <div class="bar" />
            <div class="bar" />
            <div class="bar" />
          </div>
        </Hamburger>
      );
    }

    return (
      <GameWrapper id="main">
        <Nav id="mySidenav">
          <NavUl>
            <NavLi>
              <NavText onClick={() => this.props.history.push("/settings")}>
                Settings
              </NavText>
            </NavLi>
            <NavLi>
              <NavText onClick={() => this.props.history.push("/billing")}>
                Upgrade
              </NavText>
            </NavLi>
            <NavLi>
              <NavText onClick={() => this.logOut()}>Log Out</NavText>
            </NavLi>
          </NavUl>
        </Nav>

        <PositionMenu>{hamburger}</PositionMenu>

        <ListWrapper>
          {newGame}
          {renderList}
        </ListWrapper>
        {console.log("FETCHIGN GAMES", this.props.fetchingGames)}
        {console.log("STOREDedGames GL", this.props.storedGames)}
      </GameWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    storedRound: state.round.storedRound,

    deletingGame: state.game.deletingGame,
    creatingGame: state.game.creatingGame,
    fetchingGames: state.game.fetchingGames,
    storedGames: state.game.storedGames,

    errorMessage: state.auth.errorMessage
  };
}

export default connect(
  mapStateToProps,
  { addGame, getGames, signOut }
)(withRouter(GameList));
