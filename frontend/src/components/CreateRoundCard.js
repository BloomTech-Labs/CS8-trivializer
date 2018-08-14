import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { getThree, addRound, signOut } from "../actions"; // delete later

import { withRouter } from "react-router";

import jwt_decode from "jwt-decode";

import {
  CreateRoundCardWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label,
  Input,
  Select,
  FormWrapper,
  Upgrade,
  PositionMenu,
  Title
} from "./primitives/CreateRoundCard";

import { Hamburger, NavText, NavUl, NavLi } from "./primitives/Nav";

import Nav from "./UI/Nav";

import "./primitives/css/CreateRoundCard.css";

class CreateRoundCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roundName: "",
      numberOfQuestions: "1",
      category: "",
      difficulty: "",
      type: "",
      user_type: null,
      menu: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    let  userId = decoded.sub
    
    this.setState({ user_type: localStorage.getItem(`Tier${userId}`) });
    // console.log("USER TYPE", decoded.user_type);
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

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = event => {
    event.preventDefault();
    let {
      roundName,
      numberOfQuestions,
      category,
      difficulty,
      type
    } = this.state;
    const gameId = this.props.match.params.id;
    let round = this.props.round;
    console.log(this.state.roundName);

    if (roundName === "" || roundName === "") {
      roundName = "New Round";
    }

    let formProps = {
      roundName,
      numberOfQuestions,
      category,
      difficulty,
      type
    };

    this.props.getThree(formProps, () => {
      this.props.addRound(gameId, this.props.round, id => {
        this.props.history.push(`/create-game/${id}`);
      });
    });
  };

  logOut = async event => {
    await this.props.signOut();
    this.props.history.push("/");
  };

  render() {
    let renderNumQuestions;

    if (this.state.numberOfQuestions === "a") {
      this.props.history.push("/billing");
    }

    if (this.state.user_type === "Free") {
      renderNumQuestions = (
        <fieldset>
          <LabelWrapper>
            <Label># of Questions</Label>
          </LabelWrapper>
          <Select
            name="numberOfQuestions"
            onChange={this.handleInput}
            value={this.state.numberOfQuestions}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="a">
              <Upgrade>click here to upgrade</Upgrade>
            </option>
          </Select>
        </fieldset>
      );
    }

    if (this.state.user_type === "Tier 1") {
      renderNumQuestions = (
        <fieldset>
          <LabelWrapper>
            <Label># of Questions</Label>
          </LabelWrapper>
          <Select
            name="numberOfQuestions"
            onChange={this.handleInput}
            value={this.state.numberOfQuestions}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="a">
              <Upgrade>upgrade to premium</Upgrade>
            </option>
          </Select>
        </fieldset>
      );
    }

    if (this.state.user_type === "Tier 2") {
      renderNumQuestions = (
        <fieldset>
          <LabelWrapper>
            <Label>Please enter # of Questions: 1-50</Label>
          </LabelWrapper>
          <Input
            name="numberOfQuestions"
            onChange={this.handleInput}
            value={this.state.numberOfQuestions}
            type="number"
            set="1"
            max="50"
            min="1"
          />
        </fieldset>
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
      <CreateRoundCardWrapper className="select-wrapper" id="main">
        <FormWrapper>
          <Nav id="mySidenav">
            <NavUl>
              <NavLi>
                <NavText onClick={() => this.props.history.push("/games")}>
                  Games
                </NavText>
              </NavLi>
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

          <Title>Create Round</Title>
          <form onSubmit={e => this.onSubmit(e)}>
            <fieldset>
              <LabelWrapper>
                <Label>Round Name</Label>
              </LabelWrapper>
              <Input
                name="roundName"
                placeholder="Round Name"
                type="text"
                component="input"
                autoComplete="none"
                onChange={this.handleInput}
                value={this.state.roundName}
              />
            </fieldset>

            {renderNumQuestions}

            <fieldset>
              <LabelWrapper>
                <Label>Category</Label>
              </LabelWrapper>
              <Select
                name="category"
                onChange={this.handleInput}
                value={this.state.category}
              >
                <option>Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals & Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">
                  Entertainment: Japanese Anime & Manga
                </option>
                <option value="32">Entertainment: Cartoon & Animation</option>
              </Select>
            </fieldset>
            <fieldset>
              <LabelWrapper>
                <Label>Difficulty</Label>
              </LabelWrapper>
              <Select
                name="difficulty"
                onChange={this.handleInput}
                value={this.state.difficulty}
              >
                <option>Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Select>
            </fieldset>
            <fieldset>
              <LabelWrapper>
                <Label>Type</Label>
              </LabelWrapper>
              <Select
                name="type"
                onChange={this.handleInput}
                value={this.state.type}
              >
                <option>Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </Select>
            </fieldset>

            <ButtonWrapper>
              <Button>Get Questions</Button>
            </ButtonWrapper>
          </form>
        </FormWrapper>
      </CreateRoundCardWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    storedRound: state.round.storedRound,
    round: state.round.round,
    errorMessage: state.auth.errorMessage
  };
}

export default connect(
  mapStateToProps,
  { getThree, addRound, signOut }
)(withRouter(CreateRoundCard));
