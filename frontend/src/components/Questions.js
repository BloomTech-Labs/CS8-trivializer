import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../actions";
import Pdf from "./Pdf";
import QuestionCard from "./QuestionCard";

import { QuestionsWrapper, pdfWrapper, TestDiv} from "./primitives/Questions";

class Questions extends Component {
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



    return (
      <div>
        <Pdf rootQuestions={storedQuestions}/> 
        <QuestionsWrapper>
          <h1>Questions: {numberOfQuestions}</h1>
          <h1>Difficulty: {difficulty}</h1>
          <h2> Please note: Correct answers displayed in bold.</h2>
          {subQuestions}
        </QuestionsWrapper>
      </div>
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
