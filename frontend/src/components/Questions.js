import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../actions";
import Pdf from "./Pdf";
import QuestionCard from "./QuestionCard";
import PdfBlanksRound from "./PdfBlanksRound";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { QuestionsWrapper, QuestionCardWrapper, OuterMostWrapper,
   pdfWrapper, TestDiv, Bold} from "./primitives/Questions";

class Questions extends Component {
  componentDidMount = props => {
    const questionId = this.props.match.params.id;
    this.props.getQuestions(questionId);
  };

  onDragEnd = () => {
    // the only one that is required
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



    return (
      <OuterMostWrapper>
        <Pdf rootQuestions={storedQuestions}/> 
        <PdfBlanksRound rootQuestionsBlank={storedQuestions} />
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