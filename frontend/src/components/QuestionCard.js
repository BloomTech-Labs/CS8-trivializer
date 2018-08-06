import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../actions";
import Pdf from "./Pdf";

// import jsPDF from "jspdf";

import {
  QuestionsWrapper,
  CorrectAnswer,
  QuestionsLine,
  Text
} from "./primitives/Questions";

let he = require("he");

const alphabet = ["a", "b", "c", "d"];

export default class FormattedQuestions extends Component {
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

    // this.props.question.incorrect_answers.push(
    //   this.props.question.correct_answer
    // );
    const fixedArray = [...this.props.question.incorrect_answers, this.props.question.correct_answer]

  

    let mixedAnswers = shuffle(fixedArray);

    if (mixedAnswers[0] === "True" || mixedAnswers[0] === "False") {
      mixedAnswers = ["True", "False"];
    }

    return (
      <div>
        <hr style={{borderTop:"1px solid black"}}/>
        <br />
        <h1><span>{this.props.index + 1}.   </span>{he.decode(this.props.question.question)}</h1>
        {/* converts the HTML special character encoding to plain text; i.e &quote = "" */}
        <br />
        {mixedAnswers.map((answer, index) => {
          var letter = alphabet[index];
          if (answer === this.props.question.correct_answer) {
            answer = he.decode(answer);
            return (
              <CorrectAnswer key={index}>
                <span> {letter}. </span>
                {answer}
              </CorrectAnswer>
            );
          } else {
            answer = he.decode(answer);
            return (
              <div key={index}>
                <span> {letter}. </span>
                {answer}
              </div>
            );
          }
        })}
        
      </div>
    );
  }
}