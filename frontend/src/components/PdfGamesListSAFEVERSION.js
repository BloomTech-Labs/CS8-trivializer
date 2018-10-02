import React, { Component, Fragment } from "react";
import jsPDF from "jspdf";
import QuestionCard from "./QuestionCardPdf";

import { PdfHeading, PdfWrapper, RoundName, Button } from "./primitives/Pdf";

let he = require("he");

class Pdf extends Component {
  printDocument() {
    const testDiv = document.createElement("div");
    testDiv.innerHTML = <div>PRINT ME PLEASE</div>;
    var x = window.open();
    const input = document.getElementById("divToPrint");
    const input2 = document.getElementById("roundToPrint");
    const pdf = new jsPDF();

    let storedRounds;

    var options = {
      width: 185
    };

    pdf.fromHTML(input, 10, 15, options);

    //for every round
      //fromHTML that round
      //pdf.newPage
console.log("STORED ROUNDS IN PRINT DOC", storedRounds);
    // pdf.fromHTML(input2, 10, 15, options, function() {
    //   pdf.addPage();
    // });
    // pdf.addImage(question, "JPEG", 0, 0, 20, 15);
    // pdf.text(50, 10, "--- Answer Sheet ---");

    var string = pdf.output("dataurlstring");
    var iframe =
      "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
    x.document.open();
    x.document.write(iframe);
    x.document.close();
  }

  render() {
    let storedRounds = this.props.rootQuestions;

    let subQuestions = [];
    // let numberOfQuestions = 0;
    // let difficulty = "";
    let subQuestionArray = [];

    storedRounds.map(round => {
      // put the round name in, add the questions
      console.log("ROUND", round);
      subQuestions.push(
        <RoundName>
          <div style={{ marginBottom: "10px" }}>
            ______________________________________
          </div>
          {round.roundName}
        </RoundName>
      );

      // numberOfQuestions = round.questions.length;
      // difficulty = round.questions[0].difficulty;

      subQuestions = round.questions.map((subQ, subI) => {
        return (
          <div>
            <QuestionCard key={subI} question={subQ} index={subI} />
          </div>
        );
      });
      subQuestionArray.push(subQuestions);
      subQuestionArray.push(<div>&#12;</div>);
    });

    console.log("SUB QUESTIONS ARRAY", subQuestionArray);
    console.log("SUB QUESTIONS", subQuestions)
    console.log("STORED ROUNDS", storedRounds);

    if (!subQuestions) {
      subQuestions = "Not loaded yet.";
    }

    const firstRoundName =
      this.props.rootQuestions && this.props.rootQuestions[0]
        ? this.props.rootQuestions[0].roundName
        : null;

    return (
      <div>
        {console.log("SUB QUESTIONS", subQuestionArray)}
        <PdfWrapper id="divToPrint" style={{ display: "none" }}>
          <h1 style={{ fontSize: "40px", fontWeight: 900, color: "black" }}>
            {this.props.gameName}
          </h1>
          <RoundName>
            <div style={{ marginBottom: "10px" }}>
              ______________________________________
            </div>
            {firstRoundName}
          </RoundName>
          {subQuestionArray}
        </PdfWrapper>
        <Button onClick={this.printDocument}>Print Answer Key</Button>
      </div>
    );
  }
}

export default Pdf;
