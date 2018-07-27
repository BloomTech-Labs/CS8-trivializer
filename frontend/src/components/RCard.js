import React, { Component } from 'react';
import { connect } from "react-redux";
import { getThreeRC, addRound } from '../actions';
import { withRouter } from 'react-router';

import {
    RCardWrapper,
    LabelWrapper,
    ButtonWrapper,
    Button,
    Label
  } from "./primitives/RCard";

class RCard extends Component {
    // updateRC = (event, props) => {
    //     event.preventDefault()
    //     this.props.getThreeRC(props, () => {
    //       this.props.addRound();
    //     });
    //   };

    render(){
        return (
        
            <RCardWrapper>

              <form>  
                <fieldset>
                    <LabelWrapper>
                    <Label>Round Name</Label>
                    </LabelWrapper>
                    <input
                    name="roundName"
                    placeholder={this.props.roundName}
                    type="text"
                    component="input"
                    autoComplete="none"
                    />
                </fieldset>

                <fieldset>
                    <LabelWrapper>
                        <Label># of Questions</Label>
                    </LabelWrapper>
                    <select name="numberOfQuestions">
                        <option value={this.props.numberOfQuestions}>{this.props.numberOfQuestions}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </fieldset>

                <fieldset>
                    <LabelWrapper>
                        <Label>Category</Label>
                    </LabelWrapper>
                    <select name="category">
                        <option value={this.props.category}>{this.props.category}</option>
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
                    </select>
                </fieldset>

                <fieldset>
                    <LabelWrapper>
                        <Label>Difficulty</Label>
                    </LabelWrapper>
                    <select name="difficulty">
                        <option value={this.props.difficulty}>{this.props.difficulty}</option>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>
                </fieldset>

                <fieldset>
                    <LabelWrapper>
                        <Label>Type</Label>
                    </LabelWrapper>
                    <select name="type">
                        <option value={this.props.type}>{this.props.type}</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>
                    </select>
                </fieldset>

                <ButtonWrapper><Button>Change Questions</Button></ButtonWrapper>
               </form> 
               <ButtonWrapper><Button>Delete Round</Button></ButtonWrapper>
               <ButtonWrapper><Button  onClick={()=> {this.props.history.push(`/questions/${this.props.id}`)}}>VIEW QUESTIONS</Button></ButtonWrapper>
            </RCardWrapper>
        )
    }
}

export default connect(null, {getThreeRC, addRound})(withRouter(RCard));