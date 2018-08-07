import React, { Component } from 'react';

import { connect } from "react-redux";

import Dropzone from 'react-dropzone';
import DatePicker from 'react-date-picker';

import { getGame, getRounds, saveGame, signOut } from '../actions';
import { withRouter } from 'react-router';

import { 
    RoundButton, 
    RoundButtonWrapper,
    AddIcon,
    AddIconWrapper,
    Text,
    TextWrapper,
    ListWrapper,
    OutterButton,
    PositionMenu,
    GameInfo,
    Left,
    Right
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
  SaveButtonWrapper,
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
  DateDiv,
  GameDiv

} from "./primitives/CreateGame";

import './primitives/css/GameList.css';

class CreateGame extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            files: [],
            date: new Date(),
            name: '',
            localGameName: null,
            gamePlayedDate: null,
            user_type: null,
            menu: false,
            count: 0,
         }
         this.handleInput = this.handleInput.bind(this);
         this.saveGameHandler = this.saveGameHandler.bind(this);
         this.openNav = this.openNav.bind(this);
         this.closeNav = this.closeNav.bind(this);
    }
  

 

    // ADD MODAL THAT SAYS GAME SAVED SUCCESSFULLY LATER

  count() {
      this.setState({ count:  1 });
  }

    onChangeDate = date => this.setState({ date });

    handleInput(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    
    }


    componentDidMount() {
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        this.setState({ user_type: decoded.user_type});
        console.log("USER TYPE", decoded.user_type)

        let gameId = this.props.match.params.id;
        this.props.getRounds(gameId)
        this.props.getGame(this.props.match.params.id)
        
         this.setState({localGameName: localStorage.getItem(`gameName${this.props.match.params.id}` )})
         this.setState({gamePlayedDate: localStorage.getItem(`gamePlayedDate${this.props.match.params.id}` )})
        //  localStorage.setItem(`gamePlayedDate${this.props.match.params.id}`, date )
        //  if(this.props.storedGames[0] !== undefined){
        //  this.setState({ gamePlayedDate: localStorage.getItem(`gamePlayedDate${this.props.match.params.id}` )})
        //  }
        console.log("CreateGame CDM rounds", this.props.storedRound)    
    }

    saveGameHandler = (event) => {
        event.preventDefault()
        let { date, name, count } = this.state;
        let game;
       
        
        if (name === "" || name === '' ) {
            game = { date }
       }

       if ( name.length > 0 && count === 0) {
            game = { name }
            localStorage.setItem(`gameName${this.props.match.params.id}`, name)

       }

       if (name.length > 0 && count > 0) {
        game = {  date, name };
        localStorage.setItem(`gameName${this.props.match.params.id}`, name)
        localStorage.setItem(`gamePlayedDate${this.props.match.params.id}`, date )
       }
    //    if (this.state.date === date)
        
    //     localStorage.setItem(`gamePlayedDate${this.props.match.params.id}`, date )
        

        this.props.saveGame(this.props.match.params.id, game, ()=> {
            this.props.history.push('/games');
        })
            
    
    }

    logOut = async event => {
        await this.props.signOut();
        this.props.history.push("/")
    }

    addRoundHandler = (gameId) => {
        this.props.history.push(`/create-round/${gameId}`)
      }


    openNav() {
        document.getElementById("mySidenav").style.width = "25%";
        document.getElementById("main").style.marginLeft = "25%";
        this.setState({ menu: true})
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        this.setState({ menu: false})
    }

    toggleEditName() {
        let x = document.getElementById("name")
        if (x.style.display === "none") {
            x.style.display = "block";
        }   else {
            x.style.display = "none";
        }
    }

    toggleEditCalendar() {
        let x = document.getElementById("calendar")
        if (x.style.display === "none") {
            x.style.display = "block";
            
        }   else {
            x.style.display = "none";
            
        }
    }

    render(){
        let gameId = this.props.match.params.id;

        let list =  this.props.storedRound.map((r, i) => { 
            return (
                
                    <RCard key={r._id} id={r._id} roundName={r.roundName} numberOfQuestions={r.numberOfQuestions}/>            
                    )
                });
        let renderList;        

                if (this.state.user_type === "Tier 2" ) {    
        
                    renderList = list;   
                }
        
                if (this.state.user_type === "Tier 1" ) {    
                
                    renderList = list.slice(0,10);    
                }
        
                if (this.state.user_type === "Free" ) {    
                
                    renderList = list.slice(0,3); 
                    
                }        

        let hide;
            if (this.props.storedRound.length >= 3 && this.state.user_type === "Free" ) { // && this.state.user_type === "Free"
                hide = {display: "none"};
            }
            
        
            if (this.props.storedRound.length >= 10 && this.state.user_type === "Tier 1" ) { // && this.state.user_type === "Free"
                hide = {display: "none"};
            }    
            

        let newRound;   
            if(this.props.storedRound.length >= 1){
                newRound = <NewRWrap style={hide}>
                            <NewRCard>
                                
                                <AddIconWrapper>
                                <TextWrapper><Text> New Round </Text></TextWrapper>
                                    <AddIcon className="pulsate-fwd" src={plus} style={hide} onClick={()=> this.addRoundHandler(gameId)} /></AddIconWrapper>
                            </NewRCard> 
                           </NewRWrap>
               }
   
               if (this.props.storedRound.length < 1 ) {
                   newRound = <BigPlusWrapper>
                        
                       <h1  className="tracking-out-contract">NEW ROUND</h1>
                       <NewRoundButton src={plus} onClick={()=> this.addRoundHandler(gameId)} className="pulsate-fwd"></NewRoundButton>
                       
                       </BigPlusWrapper>
               }    



               let hamburger;

               if (this.state.menu === true) {
                   hamburger = <Hamburger onClick={()=> this.state.menu ? this.closeNav() : this.openNav()} class="col">
                               <div class="con">
                               <div class="bar arrow-top-r"></div>
                               <div class="bar arrow-middle-r"></div>
                               <div class="bar arrow-bottom-r"></div>
                               </div>
                            </Hamburger>
               }
               
               if (this.state.menu === false) {
                   hamburger = <Hamburger onClick={()=> this.state.menu ? this.closeNav() : this.openNav()} class="col">
                               <div class="con">
                               <div className="bar"></div>
                               <div className="bar"></div>
                               <div className="bar"></div>
                               </div>
                            </Hamburger>
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
          <Left>      
            <DateDiv> Date to be played: {localStorage.getItem(`gamePlayedDate${this.props.match.params.id}` ).slice(0,10)}</DateDiv>
                <fieldset id="calendar">
                
                   <div onClick={()=> this.count()} >
                    <DatePicker
                        className="datePicker"
                        onChange={this.onChangeDate}
                        value={this.state.date}    
                    />
                    </div>      
                </fieldset>
                
               
                <GameDiv>Game Name:{this.state.localGameName}</GameDiv>
                <fieldset id="name">
            
                    

                    {/* <LabelWrapper>
                    <Label>update name</Label>
                    </LabelWrapper> */}
                    <Input
                    name="name"
                    type="text"
                    component="input"
                    autoComplete="none"
                    placeholder={this.state.localGameName}
                    onChange={this.handleInput}
                    value={this.state.name}
                    maxLength="12"
                    
                    />
                </fieldset>
                <SaveButtonWrapper>
                     <Button onClick={(e)=> this.saveGameHandler(e)}>Save Game</Button>
                </SaveButtonWrapper>
            </Left>

            <Right>

                
                
                

                <ButtonWrapper>
                    <Button>Print Answer Sheets</Button>
                    </ButtonWrapper>

                    <ButtonWrapper>
                    <Button>Print Answer Key</Button>
                </ButtonWrapper>
            
            </Right>   
            
               </Center>
            

     
         

        
     

    </TopContainer>
      
        
        
        <CGListWrapper>
 
            {newRound}       
            {renderList}
            
        </CGListWrapper>
        
        </CreateGameWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
      storedGames: state.game.storedGames,
      storedRound: state.round.storedRound,
      round: state.round.round,
      errorMessage: state.auth.errorMessage
    };
  }

  export default connect( mapStateToProps,
                        { getGame,
                          getRounds, 
                          saveGame, 
                          signOut })(withRouter(CreateGame));