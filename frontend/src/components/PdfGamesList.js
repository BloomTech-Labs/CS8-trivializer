// import React, { Component, Fragment } from "react";
// import jsPDF from "jspdf";
// import QuestionCard from "./QuestionCardPdf";

// import { PdfHeading, PdfWrapper, RoundName, Button } from "./primitives/Pdf";

// let he = require("he");

// class Pdf extends Component {
//   printDocument() {
//     const testDiv = document.createElement("div");
//     testDiv.innerHTML = <div>PRINT ME PLEASE</div>;
//     var x = window.open();
//     const input = document.getElementById("divToPrint");
//     const input2 = document.getElementById("roundToPrint");
//     const pdf = new jsPDF();

//     let storedRounds;

//     var options = {
//       width: 185
//     };

//     pdf.fromHTML(input, 10, 15, options);

//     //for every round
//       //fromHTML that round
//       //pdf.newPage
// console.log("STORED ROUNDS IN PRINT DOC", storedRounds);
//     // pdf.fromHTML(input2, 10, 15, options, function() {
//     //   pdf.addPage();
//     // });
//     // pdf.addImage(question, "JPEG", 0, 0, 20, 15);
//     // pdf.text(50, 10, "--- Answer Sheet ---");

//     var string = pdf.output("dataurlstring");
//     var iframe =
//       "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
//     x.document.open();
//     x.document.write(iframe);
//     x.document.close();
//   }

//   render() {
//     let storedRounds = this.props.rootQuestions;

//     let subQuestions = [];
//     // let numberOfQuestions = 0;
//     // let difficulty = "";
//     let subQuestionArray = [];

//     storedRounds.map(round => {
//       // put the round name in, add the questions
//       console.log("ROUND", round);
//       subQuestions.push(
//         <RoundName>
//           <div style={{ marginBottom: "10px" }}>
//             ______________________________________
//           </div>
//           {round.roundName}
//         </RoundName>
//       );

//       // numberOfQuestions = round.questions.length;
//       // difficulty = round.questions[0].difficulty;

//       subQuestions = round.questions.map((subQ, subI) => {
//         return (
//           <div>
//             <QuestionCard key={subI} question={subQ} index={subI} />
//           </div>
//         );
//       });
//       subQuestionArray.push(subQuestions);
//       subQuestionArray.push(<div>&#12;</div>);
//     });

//     console.log("SUB QUESTIONS ARRAY", subQuestionArray);
//     console.log("SUB QUESTIONS", subQuestions)
//     console.log("STORED ROUNDS", storedRounds);

//     if (!subQuestions) {
//       subQuestions = "Not loaded yet.";
//     }

//     const firstRoundName =
//       this.props.rootQuestions && this.props.rootQuestions[0]
//         ? this.props.rootQuestions[0].roundName
//         : null;

//     return (
//       <div>
//         {console.log("SUB QUESTIONS", subQuestionArray)}
//         <PdfWrapper id="divToPrint" style={{ display: "none" }}>
//           <h1 style={{ fontSize: "40px", fontWeight: 900, color: "black" }}>
//             {this.props.gameName}
//           </h1>
//           <RoundName>
//             <div style={{ marginBottom: "10px" }}>
//               ______________________________________
//             </div>
//             {firstRoundName}
//           </RoundName>
//           {subQuestionArray}
//         </PdfWrapper>
//         <Button onClick={this.printDocument}>Print Answer Key</Button>
//       </div>
//     );
//   }
// }

// export default Pdf;

import React, { Component } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import QuestionCard from "./QuestionCardPdf";

let he = require("he");
const alphabet = ["a", "b", "c", "d"];

class Pdf extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    storedRounds: "",
    testStr: "Test",
    url: null
  };

  // componentDidMount() {
  //   this.setState({ storedRounds: this.props.rootQuestions });
  // }

  onRender = ({ blob }) => {
    let urlBlob = URL.createObjectURL(blob);
    let initialUrl = urlBlob;
    console.log("URL BLOB", urlBlob);
    console.log("STATE URL", this.state.url);
    if (
      this.state.url === null &&
      this.props.rootQuestions &&
      this.props.rootQuestions[0]
    ) {
      this.setState({ url: URL.createObjectURL(blob) });
    }
  };

  render() {
    const { pageNumber, numPages } = this.state;

    let storedRounds =
      this.props.rootQuestions && this.props.rootQuestions[0]
        ? this.props.rootQuestions
        : [1, 2, 3];
    console.log("STORED ROUNDS VARIABLE", storedRounds);

    // let renderedQuestions = <Text>Loading...</Text>

    // if (this.props.rootQuestions[0]) {
    //   renderedQuestions = storedRounds.map(round => {
    //     round.questions.map(question => {
    //       console.log("QUESTIONS IN ROUNDS", question)
    //       return(
    //        `${he.decode(question.question)}`
    //       )
    //     });
    //   });
    // }
    // console.log("RENDERED QUESTIONS AFTER MAPPING", renderedQuestions);

    let renderedRounds = (
      <Page>
        <Text>Loading...</Text>
      </Page>
    );



    if (this.props.rootQuestions[0]) {
      renderedRounds = storedRounds.map(round => {
        return (
          <Page style={{ paddingTop: 25 }} size="A4" wrap>
            {/* {console.log("RENDERED QUESTIONS", renderedQuestions)} */}
            {/* <Text>{renderedQuestions}</Text> */}
            <View style={{ color: "black", textAlign: "center", margin: 30 }}>
              <Text
                style={{
                  textAlign: "center",
                  paddingTop: 10,
                  fontSize: 40,
                  borderTop: "2px solid black",
                  borderBottom: "2px solid black"
                }}
              >
                {round.roundName}
              </Text>
              {round.questions.map(question => {
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
                // console.log("QUESTION", question.correct_answer);

                // const fixedArray = [
                //   ...question.incorrect_answers,
                //   question.correct_answer
                // ];

                let fixedArray;
                let mixedAnswers = [1,2,3];
                if (question.incorrect_answers) {
                  fixedArray = [
                    ...question.incorrect_answers,
                    question.correct_answer
                  ];
                  mixedAnswers = shuffle(fixedArray);
                }

                if(question.incorrect_answers){
                  if (mixedAnswers[0] === "True" || mixedAnswers[0] === "False") {
                    mixedAnswers = ["True", "False"];
                  }
                }
                const decodedQuestion = question && question.question ? he.decode(question.question) : "Loading...";
                return (
                  <View wrap={false}>
                    <Text style={{ margin: 30 }}>
                      {he.decode(decodedQuestion)}
                    </Text>
                    <View>
                      {mixedAnswers.map((answer, index) => {
                        const decodedCorrectAnswer = answer && question.correct_answer ? he.decode(question.correct_answer) : "Loading..."
                        const decodedAnswer = answer && question.correct_answer ? he.decode(answer) : "Loading..."
                        var letter = alphabet[index];
                        let correctAnswer;
                        if (answer === question.correct_answer) {
                          correctAnswer = answer;
                          return (
                            <Text style={{ color: "red" }}>
                              {letter}. {decodedCorrectAnswer}
                            </Text>
                          );
                        } else {
                          return (
                            <Text>
                              {letter}. {decodedAnswer}
                            </Text>
                          );
                        }
                      })}
                    </View>
                  </View>
                );
              })}
            </View>
            {console.log("ROUND", round)}
          </Page>
        );
      });
    }

    if (this.props.rootQuestions[0]) {
      return (
        <div>
          <Document shallow onRender={this.onRender}>
            {renderedRounds}
          </Document>
          <a href={this.state.url} target="/pdf">
            Download
          </a>
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

export default Pdf;
