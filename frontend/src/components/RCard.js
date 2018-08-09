import React, { Component } from 'react';
import { connect } from "react-redux";
import { getThreeUpdate, updateRoundCard, deleteRound } from '../actions';
import { withRouter } from 'react-router';

import jwt_decode from 'jwt-decode';

import trashIcon from '../assets/trashIcon.png';
import viewIcon from '../assets/view.png';
import redoIcon from '../assets/redo.png';

import {
    RCardWrapper,
    LabelWrapper,
    ButtonWrapper,
    Button,
    Label,
    TitleLabel,
    Select,
    Input,
    IconContainer,
    TrashIconWrapper,
    TrashIcon,
    ViewIconWrapper,
    ViewIcon,
    RedoIcon,
    FormWrap,
    
    
  } from "./primitives/RCard";

  import './primitives/css/RCard.css';

  

class RCard extends Component {
    constructor(props){
        super(props);
        const  mySet = new Set();

        this.state = {
            roundName: '' ,
            numberOfQuestions: '',
            category: '',
            difficulty: '',
            type: '',
            user_type: null
         
        }

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
     
        this.setState({ user_type: decoded.user_type});
        console.log("USER TYPE", decoded.user_type)

        if(this.state.numberOfQuestions === '') {
            this.setState({numberOfQuestions: '1'});
        }
    }  


  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
    
  }

    updateRound(event) {
        event.preventDefault()
        const {roundName, numberOfQuestions, category, difficulty, type} = this.state;
        let formProps;

        if (roundName === "" || roundName === '' ) {
            formProps = { numberOfQuestions, category, difficulty, type }
       }

       if (roundName.length > 0) {
        formProps = {  roundName, numberOfQuestions, category, difficulty, type};
       }

        


      
        this.props.getThreeUpdate(formProps, () => {
                (console.log("ROUND IN RCCARD",this.props.round))
            this.props.updateRoundCard(this.props.id, this.props.round)
        });
      };

    render(){
        let renderNumQuestions;
        
        if(this.state.numberOfQuestions === 'a' ){
            this.props.history.push('/billing')
          }

    if (this.state.user_type === "Free" ){
      renderNumQuestions = (  
      <fieldset>
      <LabelWrapper>
      <Label>Number of questions</Label>
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
        <option value="a">click here to upgrade</option>
      </Select>
      </fieldset>
      )
    }

    if (this.state.user_type === "Tier 1" ){
      renderNumQuestions = (  
      <fieldset>
      <LabelWrapper>
      <Label>Number of questions</Label>
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
        <option value="a">upgrade to Premium</option>
      </Select>
      </fieldset>
      )
    }
   
    if (this.state.user_type === "Tier 2" ){
      renderNumQuestions = (  
      <fieldset>
      <LabelWrapper>
      <Label>Number of questions: 1-50</Label>
      </LabelWrapper>
      <Input  
        name="numberOfQuestions" 
        onChange={this.handleInput} 
        value={this.state.numberOfQuestions}
        placeholder={this.props.numberOfQuestions}
        type="number"
        set="1" 
        max="50"
        min="1"
      />
      </fieldset>
      )
    }

        let title;
        if(this.state.roundName === '') {
            title = this.props.roundName;
        }

        if(this.state.roundName.length > 2) {
            title = this.state.roundName;
        }

      

     

        return (
        
            <RCardWrapper className="card-1 hvr-rectangle-out">
                
               

              <form>  
                <FormWrap>   
                  <TitleLabel>
                    {title}
                    
                  
                  </TitleLabel>
                     
                  <fieldset>
                    <LabelWrapper>
                    <Label>Round Name</Label>
                    </LabelWrapper>
                    <Input
                    name="roundName"
                    placeholder="update round name"
                    type="text"
                    component="input"
                    autoComplete="none"
                    onChange={this.handleInput}
                    value={this.state.roundName}
                    maxLength="15"
                    />
                </fieldset>


                  {renderNumQuestions}
    
                <fieldset>
                    <LabelWrapper>
                        <Label>Category</Label>
                    </LabelWrapper>
                    <Select name="category" onChange={this.handleInput} value={this.state.category}>
                        <option>any category</option>
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
                        <option value="31">Entertainment: Japanese Anime & Manga</option>
                        <option value="32">Entertainment: Cartoon & Animation</option>
                    </Select>
                </fieldset>

                <fieldset>
                    <LabelWrapper>
                        <Label>Difficulty</Label>
                    </LabelWrapper>
                    <Select name="difficulty" onChange={this.handleInput} value={this.state.difficulty}>
                        <option>any difficulty</option>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </Select>
                </fieldset>

                <fieldset>
                    <LabelWrapper>
                        <Label>Type</Label>
                    </LabelWrapper>
                    <Select name="type" onChange={this.handleInput} value={this.state.type}>
                        <option>any type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>
                    </Select>
                </fieldset>
               </FormWrap>
               </form> 


               <IconContainer>
                    <TrashIconWrapper>
                        <TrashIcon src={trashIcon} onClick={()=> this.props.deleteRound(this.props.id)}/>
                    </TrashIconWrapper>

                    <ViewIconWrapper>
                        <ViewIcon src={viewIcon} onClick={()=> {this.props.history.push(`/questions/${this.props.id}`)}}/> 
                    </ViewIconWrapper>

                    <ViewIconWrapper>
                        <RedoIcon src={redoIcon} onClick={(e)=>{this.updateRound(e)}}/>
                    </ViewIconWrapper>
                </IconContainer>


 
    
            </RCardWrapper>
        )
        
    }
}

function mapStateToProps(state) {
    return {
      storedRound: state.round.storedRound,
      round: state.round.round,
      updatingRound: state.round.updatingRound,
      errorMessage: state.auth.errorMessage
    };
  }

export default connect(mapStateToProps, {getThreeUpdate, updateRoundCard, deleteRound})(withRouter(RCard));