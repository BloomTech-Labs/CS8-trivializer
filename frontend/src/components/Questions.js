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
      
      var string = pdf.output('dataurlstring');
      var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
      var x = window.open();
      // x.document.open();
      x.document.open();
      x.document.write(iframe);
      x.document.close();
      console.log(x);



      // pdf.output("dataurlnewwindow");
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

    // console.log("STORED QUESTIONS", this.props.storedQuestions);
    // console.log("STOREDQUESTIONS[0]", this.props.storedQuestions[0]);

    
    

    let subQuestions = null;
    this.props.storedQuestions.map((q, i) => {
      subQuestions = q.map((subQ, subI) => {
        // console.log("SUB QUESTIONS", subQ);
        subQ.incorrect_answers.push(subQ.correct_answer); // adds the correct answer to the array of incorrect
        const mixedAnswers = shuffle(subQ.incorrect_answers); //shuffles them up on page load

        // console.log("SHUFFLED ANSWERS", mixedAnswers);
        return (
          <div>
          <br />
          <h1>{subQ.question}</h1>
            <br />
            {mixedAnswers.map(answer => {
              return <div>{answer}</div>;
            })}
          </div>
        );
      });
    });
    // console.log("QUESTIONS MAPPED", questions);

    return (
      <div id="divToPrint">
        <h1>Questions page!!</h1>
        <br />
        {subQuestions}
        <br />
        <button onClick={this.printDocument}>Print</button>
        {/* {incorrect} */}

        {/* {console.log("ques", this.props.questions)}
        {console.log("stored questions", this.props.storedQuestions)} */}
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
