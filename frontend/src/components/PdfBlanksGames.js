import React, { Component, Fragment } from "react";
import jsPDF from "jspdf";
import QuestionCard from "./QuestionCardPdf";

import {
  PdfHeading,
  PdfWrapper,
  RoundName,
  Button,
  BlankLine,
  GameName
} from "./primitives/PdfBlanksGames";

let he = require("he");

//    const firstRoundName = this.props.rootQuestions && this.props.rootQuestions[0] ? this.props.rootQuestions[0].roundName : null;
//<h1 style={{fontSize: "40px", fontWeight: 900}}>{this.props.gameName}</h1>
{
  /* <RoundName><div style={{marginBottom: "10px"}}>______________________________________</div>{firstRoundName}</RoundName> */
}

class PdfBlanksGames extends Component {
  printDocument() {
    const testDiv = document.createElement("div");
    testDiv.innerHTML = <div>PRINT ME PLEASE</div>;
    var x = window.open();
    const input = document.getElementById("blanksToPrint");
    const pdf = new jsPDF();

    var options = {
      width: 185
    };

    pdf.fromHTML(input, 10, 15, options);
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
    let numberOfQuestions = 0;
    let difficulty = "";
    let subQuestionArray = [];

    storedRounds.map(round => {
      // put the round name in, add the questions
      subQuestions.push(
        <RoundName>
          <div style={{ marginBottom: "10px" }}>
            __________________________________________
          </div>
          {round.roundName}
        </RoundName>
      );

      numberOfQuestions = round.questions.length;
      // difficulty = round.questions[0].difficulty;

      subQuestions = round.questions.map((subQ, index) => {
        return (
          <BlankLine>
            {index + 1}.{" "}
            <div>
              {" "}
              _________________________________________________________________________________________
            </div>
          </BlankLine>
        );
      });
      subQuestionArray.push(subQuestions);
    });

    if (!subQuestions) {
      subQuestions = "Not loaded yet.";
    }

    const firstRoundName =
      this.props.rootQuestions && this.props.rootQuestions[0]
        ? this.props.rootQuestions[0].roundName
        : null;

    return (
      <div>
        <PdfWrapper id="blanksToPrint" style={{ display: "none" }}>
          <GameName>
            {this.props.gameName}
          </GameName>
          <RoundName>
            <div style={{ marginBottom: "10px" }}>
            __________________________________________
            </div>
            {firstRoundName}
          </RoundName>
          {subQuestionArray}
        </PdfWrapper>
        <Button onClick={this.printDocument}>Print Answer Sheets</Button>
      </div>
    );
  }
}

export default PdfBlanksGames;
