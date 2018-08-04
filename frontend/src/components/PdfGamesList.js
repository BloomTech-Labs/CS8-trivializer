import React, { Component, Fragment } from "react";
import jsPDF from "jspdf";
import question from "../assets/question.png";
import QuestionCard from "./QuestionCardPdf";

import { PdfHeading, PdfWrapper } from "./primitives/Pdf";


let he = require("he");

class Pdf extends Component {
  printDocument() {
    const testDiv = document.createElement("div");
    testDiv.innerHTML = <div>PRINT ME PLEASE</div>;
    var x = window.open();
    const input = document.getElementById("divToPrint");
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
    console.log("QUESTIONS GAMES LIST PDF", storedRounds)
    let subQuestions = null;
    let numberOfQuestions = 0;
    let difficulty = "";
    storedRounds.map(round => {
      console.log("ROUND", round);
      if(round){
        numberOfQuestions = round.questions.length;
        // difficulty = round.questions[0].difficulty;
        subQuestions = round.questions.map((subQ, subI) => {
          console.log("SUB Q's", subQ);
        return <QuestionCard key={subI} question={subQ} index={subI} />;
        });
      } else return;
    });

    if(!subQuestions){
      subQuestions = "Not loaded yet."
    }
    return (
      <div>
        <PdfWrapper id="divToPrint" style={{ display: "none"}}>
        <PdfHeading>--- Answer Key ---</PdfHeading>
        <PdfHeading> Game Name - Round Name </PdfHeading>
          {console.log("SUB QUESTIONS", subQuestions)}
          {subQuestions}
        </PdfWrapper>
        <button onClick={this.printDocument}>Print Answer Key</button>
      </div>
    );
  }
}

export default Pdf;
