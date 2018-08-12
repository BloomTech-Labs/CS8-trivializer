import React, { Component } from "react";

import { connect } from "react-redux";

import Dropzone from 'react-dropzone';
import DatePicker from 'react-date-picker';

import { getGame, getRounds, saveGame, signOut } from '../actions';
import { withRouter } from 'react-router';

import PdfBlanksGames from "./PdfBlanksGames";
import Pdf from "./PdfGamesList";

import { 
    RoundButton, 
    RoundButtonWrapper,
    AddIcon,
    AddIconWrapper,
    Text,
    TextWrapper,
    ListWrapper,
    OutterButton,
    PositionMenu
    } 
        from './primitives/CreateGame';
import { 
            Hamburger,
            NavText,
            NavUl,
            NavLi
            } from './primitives/Nav'; 

import RCard from './RCard';
import NewRCard from './NewRCard';
import plus from '../assets/bluePlus.svg'

import Nav from './UI/Nav';

import './primitives/css/CreateGame.css'

import jwt_decode from "jwt-decode";

import {
  CreateGameWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label,
  Title,
  GameCardWrapper,
  CGListWrapper,
  TopContainer,
  Center,
  NewRoundButton,
  BigPlusWrapper,
  NewRWrap,
  Input,
  NRW,
  CenterSpinner
} from "./primitives/CreateGame";

import "./primitives/css/GameList.css";
import Spinner from './UI/Spinner';


class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      date: new Date(),
      name: "",
      localGameName: null,
      priorDate: null,
      user_type: null,
      menu: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.saveGameHandler = this.saveGameHandler.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  // ADD MODAL THAT SAYS GAME SAVED SUCCESSFULLY LATER

  

  onChangeDate = date => this.setState({ date });

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    let  userId = decoded.sub
    // this.setState({ user_type: decoded.user_type });
    this.setState({ user_type: localStorage.getItem(`Tier${userId}`) });
   

    let gameId = this.props.match.params.id;
    this.props.getRounds(gameId);
    this.props.getGame(this.props.match.params.id);

    this.setState({
      localGameName: localStorage.getItem(
        `gameName${this.props.match.params.id}`
      )
    });

    console.log("CreateGame CDM rounds", this.props.storedRound);
  }

  componentDidUpdate(){
    const localToken = localStorage.getItem("token");
    const decoded = jwt_decode(localToken);
    const userId = decoded.sub;
    console.log("INSIDE CDU ID",localStorage.getItem(`Tier${userId}`));
  }



  saveGameHandler = event => {
    event.preventDefault()
        let { date, name } = this.state;
        let game;
        let d = Date();
       console.log("date", date.toString().split('').splice(0,10).join('')); 
       console.log("Date()", d.toString().split('').splice(0,10).join(''));
        if (name.length > 0 && date.toString().split('').splice(0,10).join('') !== d.toString().split('').splice(0,10).join('') ) {
          game = { name, date };
        }
        
        if (name.length > 0 && date.toString().split('').splice(0,10).join('') === d.toString().split('').splice(0,10).join('') ) {
          game = { name };
        }

        if (name.length === 0 && date.toString().split('').splice(0,10).join('') !== d.toString().split('').splice(0,10).join('') ) {
            game = { date }
          }
  //       if (name.length === 0 && date !== new Date() ) {
  //           game = { date }
  //      }
  //      console.log("name length:",name.length)
  //      if ( name.length > 0 && date !== new Date()) {
  //           game = { name, date }   
  //           localStorage.setItem(`gameName${this.props.match.params.id}`, name);
  //      }

  //      if ( name.length > 0 ) {
  //       game = { name, date }   
  //       localStorage.setItem(`gameName${this.props.match.params.id}`, name);
  //  }

  //      if ( name.length > 0 && date === new Date())  {
  //       game = { name }   
  //       localStorage.setItem(`gameName${this.props.match.params.id}`, name);
  //  }

       


    this.props.saveGame(this.props.match.params.id, game, ()=> {
      this.props.history.push('/games');
  })
  };

  logOut = async event => {
    await this.props.signOut();
    this.props.history.push("/");
  };

  addRoundHandler = gameId => {
    this.props.history.push(`/create-round/${gameId}`);
  };

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

  render() {
    let gameId = this.props.match.params.id;

    let list = this.props.storedRound.map((r, i) => {
      return (
        <RCard
          key={r._id}
          id={r._id}
          roundName={r.roundName}
          numberOfQuestions={r.numberOfQuestions}
        />
      );
    });
    let renderList;

    if (this.state.user_type === "Tier 2") {
      renderList = list;
    }

    if (this.state.user_type === "Tier 1") {
      renderList = list.slice(0, 10);
    }

    if (this.state.user_type === "Free") {
      renderList = list.slice(0, 3);
    }

    let hide;
    if (this.props.storedRound.length >= 3 && this.state.user_type === "Free") {
      // && this.state.user_type === "Free"
      hide = { display: "none" };
    }

    if (
      this.props.storedRound.length >= 10 &&
      this.state.user_type === "Tier 1"
    ) {
      // && this.state.user_type === "Free"
      hide = { display: "none" };
    }

    let newRound;
    if (this.props.storedRound.length >= 1) {
      newRound = (
        <NewRWrap style={hide}>
          <NewRCard>
            <AddIconWrapper>
              <TextWrapper>
                <Text> New Round </Text>
              </TextWrapper>
              <AddIcon
                className="pulsate-fwd"
                src={plus}
                style={hide}
                onClick={() => this.addRoundHandler(gameId)}
              />
            </AddIconWrapper>
          </NewRCard>
        </NewRWrap>
      );
    }

    if (this.props.storedRound.length < 1) {
      newRound = (
        <BigPlusWrapper>
          <NRW className="tracking-out-contract">NEW ROUND</NRW>
          <NewRoundButton
            src={plus}
            onClick={() => this.addRoundHandler(gameId)}
            className="pulsate-fwd"
          />
        </BigPlusWrapper>
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
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </Hamburger>
      );
    }
    let storedRounds = this.props.storedRound


    let load;
    if(this.props.updatingRound){

        load = (
            <CenterSpinner><Spinner /></CenterSpinner>
        )
    }

    return (
        <CreateGameWrapper id="main">
            

            <Nav id="mySidenav">
                <NavUl>
                    <NavLi><NavText onClick={()=> this.props.history.push('/games')}>Games</NavText></NavLi>
                    <NavLi><NavText onClick={()=> this.props.history.push('/settings')}>Settings</NavText></NavLi>
                    <NavLi><NavText onClick={()=> this.props.history.push('/billing')}>Upgrade</NavText></NavLi>
                    <NavLi><NavText onClick={()=> this.logOut()}>Log Out</NavText></NavLi>
                </NavUl>    
            </Nav>

            <PositionMenu>{hamburger}</PositionMenu>

    <TopContainer>         
            
            {console.log("STORED ROUND", this.props.storedRound)}
            {console.log("STATE",this.state)}

      

            {/* <div>
                <fieldset>        
                    <Dropzone
                    onDrop={this.onDrop.bind(this)}
                    accept="image/jpeg, image/png, image/gif"
                    >
                    <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                </fieldset>
            </div> */}

          <Center>
          
            <fieldset>
              <DatePicker
                className="datePicker"
                onChange={this.onChangeDate}
                value={this.state.date}
              />
            </fieldset>
            {console.log("games", this.props.storedGames)}
            <fieldset>
              <LabelWrapper>
                <Label>Game Name</Label>
              </LabelWrapper>
              <Input
                name="name"
                type="text"
                component="input"
                autoComplete="none"
                placeholder={this.state.localGameName}
                onChange={this.handleInput}
                value={this.state.name}
              />
            </fieldset>
            <ButtonWrapper>
              <Button onClick={e => this.saveGameHandler(e)}>Save Game</Button>
            </ButtonWrapper>
          </Center>

          <OutterButton>
            <ButtonWrapper>
              <PdfBlanksGames rootQuestions={storedRounds} gameName={this.state.localGameName} />
            </ButtonWrapper>

            <ButtonWrapper>
            <Pdf rootQuestions={storedRounds} gameName={this.state.localGameName} />
            </ButtonWrapper>

            
          </OutterButton>
        </TopContainer>
        {load}
        <CGListWrapper>
          {newRound}
          {renderList}
        </CGListWrapper>
      </CreateGameWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    updatingRound: state.round.updatingRound,
    storedGames: state.game.storedGames,
    storedRound: state.round.storedRound,
    round: state.round.round,
    errorMessage: state.auth.errorMessage
  };
}

export default connect(
  mapStateToProps,
  {
    getGame,
    getRounds,
    saveGame,
    signOut
  }
)(withRouter(CreateGame));
