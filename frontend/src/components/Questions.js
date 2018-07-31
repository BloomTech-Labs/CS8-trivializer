import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../actions";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { QuestionsWrapper, CorrectAnswer, QuestionsLine } from "./primitives/Questions";

var he = require("he");

class Questions extends Component {
  componentDidMount = props => {
    const questionId = this.props.match.params.id;
    this.props.getQuestions(questionId);
  };

  printDocument() {
    var x = window.open();
    const input = document.getElementById("divToPrint");
    const pdf = new jsPDF();
    pdf.fromHTML(input);
    var string = pdf.output("dataurlstring");

    var iframe =
      "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
    x.document.open();
    x.document.write(iframe);
    x.document.close();
  }

  render() {
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    // console.log("STORED QUESTIONS", this.props.storedQuestions);
    // console.log("STOREDQUESTIONS[0]", this.props.storedQuestions[0]);

    let subQuestions = null;
    let mixedQuestionsCheck = null;
    this.props.storedQuestions.map((q, i) => {
      subQuestions = q.map((subQ, subI) => {
        // console.log("SUB QUESTIONS", subQ);
        subQ.incorrect_answers.push(subQ.correct_answer); // adds the correct answer to the array of incorrect
        const mixedAnswers = shuffle(subQ.incorrect_answers); //shuffles them up on page load
        // for(i = 0; i < mixedAnswers.length; i++) {
        //   if(mixedAnswers[i] === subQ.correct_answer) {

        //   }
        // }

        // console.log("SHUFFLED ANSWERS", mixedAnswers);
        return (
          <div>
            <br />
            <h1>{he.decode(subQ.question)}</h1>{" "}
            {/* converts the HTML special character encoding to plain text; i.e &quote = "" */}
            <br />
            {mixedAnswers.map(answer => {
              if (answer === subQ.correct_answer) {
                console.log("CORRECT ANSWER", subQ.correct_answer);
                answer = he.decode(answer);
                // return <div class="correctAnswer">{answer}</div>
                return <CorrectAnswer>{answer}</CorrectAnswer>;
              } else {
                answer = he.decode(answer);
                return <div>{answer}</div>;
              }
            })}
            <QuestionsLine />
          </div>
        );
      });
    });
    // console.log("QUESTIONS MAPPED", questions);

    return (
      <div>
        <QuestionsWrapper id="divToPrint">
          <h1>Questions page!!</h1>
          <br />
          {subQuestions}
          <br />
        </QuestionsWrapper>

        <button onClick={this.printDocument}>Print</button>
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
