import React, { Component, Fragment } from "react";
import jsPDF from "jspdf";
import { Document, Page } from 'react-pdf';
import question from "../assets/question.png";
import blankSheet from "../assets/pdf/BlankSheets.pdf";
import QuestionCard from "./QuestionCardPdf";

import { PdfHeading, PdfWrapper } from "./primitives/Pdf";

let he = require("he");

class Pdf extends Component {
  printDocument() {
    const testDiv = document.createElement("div");
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

  printBlanks() {
    return (
      <div>
        <Document file={blankSheet}>
          <Page pageNumber={1}/>
        </Document>
      </div>
    );
  }

  render() {
    let storedQuestions = this.props.rootQuestions;
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
        <PdfWrapper id="divToPrint" style={{ display: "none" }}>
          <PdfHeading>--- Answer Key ---</PdfHeading>
          <PdfHeading> Game Name - Round Name </PdfHeading>
          {subQuestions}
        </PdfWrapper>
        <button onClick={this.printDocument}>Print Answer Key</button>
        <button onClick={this.printBlanks}>Blank Sheets</button>
      </div>
    );
  }
}

export default Pdf;
