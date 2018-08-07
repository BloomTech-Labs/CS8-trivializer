import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../actions";
import Pdf from "./Pdf";

import {
  PdfQuestion,
  CorrectAnswerPdf,
  PdfWrapper
} from "./primitives/Pdf";


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

    let fixedArray = [];
    if(this.props.question.incorrect_answers && this.props.question.correct_answer){
      fixedArray = [...this.props.question.incorrect_answers,this.props.question.correct_answer];
    }
    
    
    // this must be a new variable as to not push correct_answer twice.

    

    let mixedAnswers = shuffle(fixedArray);

    if (mixedAnswers[0] === "True" || mixedAnswers[0] === "False") {
      mixedAnswers = ["True", "False"];
    }

    const decodedQuestion = this.props.question && this.props.question.question ? he.decode(this.props.question.question) : "Loading...";
    //conditional render for he.decode



    return (
      <PdfWrapper>
        
        <div style={{fontSize:8}}>____________________________________________________________________________________________________________________________________________________________</div>
        <br />
        <h1>
          <PdfQuestion>{this.props.index + 1}. {decodedQuestion}</PdfQuestion>
        </h1>
        {/* converts the HTML special character encoding to plain text; i.e &quote = "" */}
        <br />
        {mixedAnswers.map((answer, index) => {
          var letter = alphabet[index];
          if (answer === this.props.question.correct_answer) {
            answer = he.decode(answer);
            return (
              <CorrectAnswerPdf key={index}>
                <span> {letter}. </span>
                {answer}
              </CorrectAnswerPdf>
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
      </PdfWrapper>
    );
  }
}