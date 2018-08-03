import React, { Component, Fragment } from "react";
import jsPDF from "jspdf";
import question from "../assets/question.png";
import QuestionCard from "./QuestionCardTEST";



let he = require("he");

// console.log("PDF PROPS", this.props.storedQuestions);
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

    console.log("input html test", testDiv);
    console.log("input html", input);
    pdf.fromHTML(input, 10, 15, options);
    // pdf.addImage(question, "JPEG", 0, 0, 20, 15);
    // pdf.text(50, 10, "--- Answer Sheet ---");

    var string = pdf.output("dataurlstring");
    var iframe =
      "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
    x.document.open();
    x.document.write(iframe);
    x.document.close();
    // console.log("PDF PROPS ID", this.props.id);
  }

  render() {
    console.log("PDF PROPS QUESTIONS", this.props.rootQuestions);
    let storedQuestions = this.props.rootQuestions;
    let subQuestions = null;
    console.log("stored questions", storedQuestions);
    let numberOfQuestions = 0;
    let difficulty = "";
    console.log("# OF QUESTIONS", numberOfQuestions);
    storedQuestions.map(q => {
      numberOfQuestions = q.length;
      difficulty = q[0].difficulty;
      subQuestions = q.map((subQ, subI) => {
        return <QuestionCard key={subI} question={subQ} index={subI} />;
      });
    });
    return (
      <div>
        <pdfWrapper id="divToPrint" style={{ display: "none"}}>
        <h2> Please note: Correct answers displayed in bold.</h2>
          {subQuestions} SECRET STUFF!!!
        </pdfWrapper>
        <button onClick={this.printDocument}>Print</button>
      </div>
    );
  }
}

export default Pdf;
