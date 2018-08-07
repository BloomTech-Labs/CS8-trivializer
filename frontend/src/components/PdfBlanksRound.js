import React, { Component, Fragment } from "react";
import jsPDF from "jspdf";

import QuestionCard from "./QuestionCardPdf";

import {
  PdfHeading,
  PdfWrapper,
  PdfButton,
  BlankLine,
} from "./primitives/PdfBlanksRound";

let he = require("he");

class PdfBlanksRound extends Component {
  printDocument() {
    const testDiv = document.createElement("div");
    testDiv.innerHTML = <div>PRINT ME PLEASE</div>;
    var x = window.open();
    const input = document.getElementById("blankToPrint");
    const pdf = new jsPDF();

    var options = {
      width: 210
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
    let storedQuestions = this.props.rootQuestionsBlank;
    let subQuestions = null;
    let numberOfQuestions = 0;
    let difficulty = "";
    storedQuestions.map(q => {
      numberOfQuestions = q.length;
      subQuestions = q.map((subQ, index) => {
        return (
          <BlankLine>
            {index + 1}. <div>
              {" "}
              _________________________________________________________________________________________
            </div>
          </BlankLine>
        );
      });
    });
    return (
      <div>
        <PdfWrapper id="blankToPrint" style={{ display: "none" }}>
          <PdfHeading> Game Name - Round Name </PdfHeading>
          {subQuestions}
        </PdfWrapper>
        <PdfButton onClick={this.printDocument}>Print Blank Sheets</PdfButton>
      </div>
    );
  }
}

export default PdfBlanksRound;
