import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../actions";
import Pdf from "./Pdf";
import QuestionCard from "./QuestionCard";
import PdfBlanksRound from "./PdfBlanksRound";
import Nav from './UI/Nav';

import { 
  Hamburger,
  NavText,
  NavUl,
  NavLi
  } from './primitives/Nav'; 

  import './primitives/css/Questions.css'
  import './primitives/css/GameList.css'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { QuestionsWrapper, QuestionCardWrapper, OuterMostWrapper,
   pdfWrapper, TestDiv, Bold, PositionMenu, ButtonWrap} from "./primitives/Questions";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      menu: false
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
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



  componentDidMount = props => {
    const questionId = this.props.match.params.id;
    this.props.getQuestions(questionId);
  };

  

  


  render() {
    let storedQuestions = this.props.storedQuestions;
    let subQuestions = null;
    let numberOfQuestions = 0;
    let difficulty = "";

    storedQuestions.map(q => {
      numberOfQuestions = q.length;
      // difficulty = q[0].difficulty;
      subQuestions = q.map((subQ, subI) => {
        return <QuestionCard key={subI} question={subQ} index={subI} />;
      });
    });

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

    return (
      <OuterMostWrapper id="main">
            <Nav id="mySidenav">
                <NavUl>
                    <NavLi><NavText onClick={()=> this.props.history.push('/games')}>Games</NavText></NavLi>
                    <NavLi><NavText onClick={()=> this.props.history.push('/settings')}>Settings</NavText></NavLi>
                    <NavLi><NavText onClick={()=> this.props.history.push('/billing')}>Upgrade</NavText></NavLi>
                    <NavLi><NavText onClick={()=> this.logOut()}>Log Out</NavText></NavLi>
                </NavUl>    
            </Nav>

            <PositionMenu>{hamburger}</PositionMenu>

        <ButtonWrap>
          <Pdf rootQuestions={storedQuestions}/> 
          <PdfBlanksRound rootQuestionsBlank={storedQuestions} />
        </ButtonWrap>
        <QuestionsWrapper>
          <h1>Questions: {numberOfQuestions}</h1>
          <h1>Difficulty: {difficulty}</h1>
          <Bold><h2> Please note: Correct answers displayed in bold.</h2></Bold>

       <QuestionCardWrapper>
          {subQuestions}
      </QuestionCardWrapper>
        


        
        </QuestionsWrapper>
      </OuterMostWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    storedQuestions: state.round.storedQuestions,
    erorrMessage: state.auth.erorrMessage
  };
}

export default connect(
  mapStateToProps,
  { getQuestions }
)(Questions);