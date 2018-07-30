import React, { Component } from 'react';

import { connect } from "react-redux";

import Dropzone from 'react-dropzone';
import DatePicker from 'react-date-picker';

import { getGame, getRounds, saveGame } from '../actions';
import { withRouter } from 'react-router';
import { Nav, Link } from './primitives/Nav';
import { RoundButton, RoundButtonWrapper } from './primitives/CreateGame';

import RoundCard from './RoundCard';
import RCard from './RCard';

import {
  CreateGameWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label,
  Title,
  GameCardWrapper

} from "./primitives/CreateGame";


class CreateGame extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            files: [],
            date: new Date(),
            name: '',
            localGameName: null
         }
         this.handleInput = this.handleInput.bind(this);
         this.saveGameHandler = this.saveGameHandler.bind(this);
         
    }
  
    // ADD MODAL THAT SAYS GAME SAVED SUCCESSFULLY LATER

    onDrop(files) {
      this.setState({
        files
      });
    };

    onChangeDate = date => this.setState({ date });

    handleInput(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    
    }

    componentDidMount() {
        let gameId = this.props.match.params.id;
        this.props.getRounds(gameId)
        this.props.getGame(this.props.match.params.id)
        
         this.setState({localGameName: localStorage.getItem(`gameName${this.props.match.params.id}` )})

        console.log("CreateGame CDM rounds", this.props.storedRound)    
    }

    saveGameHandler = (event) => {
        event.preventDefault()
        let { files, date, name } = this.state;
        let game = { files, date, name };
        
        localStorage.setItem(`gameName${this.props.match.params.id}`, name)

        this.props.saveGame(this.props.match.params.id, game)
    }

    

    addRoundHandler = (gameId) => {
        this.props.history.push(`/create-round/${gameId}`)
      }

    render(){
        let gameId = this.props.match.params.id;

        let list =  this.props.storedRound.map((r, i) => { 
            return (
                
                    <RCard key={r._id} id={r._id} roundName={r.roundName} numberOfQuestions={r.numberOfQuestions}/>            
                    )
                });

 

    return (
        <CreateGameWrapper>
            <Nav>
              <Link onClick={()=> this.props.history.push('/games')}>Games List</Link>
              <Link onClick={()=> this.props.history.push('/settings')}>Settings</Link>
              <Link onClick={()=> this.props.history.push('/billing')}>Billing</Link>
            </Nav> 
            <Title>GAME CREATION SCREEN</Title>
            {console.log("PHSN", this.state.placeHolderName)}
            {console.log("STATE",this.state)}

            <form>
                <fieldset>    
                    <Dropzone
                    onDrop={this.onDrop.bind(this)}
                    accept="image/jpeg, image/png, image/gif"
                    >
                    <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                </fieldset>     
                <fieldset>
                    <DatePicker
                        onChange={this.onChangeDate}
                        value={this.state.date}
                    />      
                </fieldset>
                {console.log("games", this.props.storedGames)}
                <fieldset>
                    <LabelWrapper>
                    <Label>Game Name</Label>
                    </LabelWrapper>
                    <input
                    name="name"
                    type="text"
                    component="input"
                    autoComplete="none"
                    placeholder={this.state.localGameName}
                    onChange={this.handleInput}
                    value={this.state.name}
                    />
                </fieldset>
            </form>    

         <ButtonWrapper>
          <Button>Print Answer Sheets</Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button>Print Answer Key</Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button onClick={(e)=> this.saveGameHandler(e)}>Save Game</Button>
        </ButtonWrapper>
      
        <RoundButtonWrapper onClick={()=> this.addRoundHandler(gameId)}><RoundButton>ADD ROUND</RoundButton></RoundButtonWrapper>
        
        <div>    
            {list}
            {console.log("CreateGames SG", this.props.storedGames)}
        </div>
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

  export default connect( mapStateToProps,{ getGame, getRounds, saveGame })(withRouter(CreateGame));