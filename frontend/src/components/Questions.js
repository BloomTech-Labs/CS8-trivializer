import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../actions";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class Questions extends Component {
  componentDidMount = props => {
    const questionId = this.props.match.params.id;
    this.props.getQuestions(questionId);
  };

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.output("dataurlnewwindow");
      // pdf.save("download.pdf");
    });
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

    let questions = this.props.storedQuestions.map((q, i) => {

      q[i].incorrect_answers.push(q[i].correct_answer);
      const mixedQuestions = shuffle(q[i].incorrect_answers);
      return (
        <div id="divToPrint">
          <h1>{q[i].question}</h1>
          <br />
          {mixedQuestions}
          <button onClick={this.printDocument}>Print</button>
        </div>
      );
    });
    // let incorrect = this.props.storedQuestions.map((ic, i) => {
    //   return (
    //     <h1>
    //       {ic[i].incorrect_answers}
    //       <br />
    //     </h1>
    //   );
    // });

    return (
      <div>
        <h1>Questions page!!</h1>
        <br />
        {questions}
        <br />
        {/* {incorrect} */}

        {console.log("ques", this.props.questions)}
        {console.log("stored questions", this.props.storedQuestions)}
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
