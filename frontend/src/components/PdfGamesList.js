import React, { Component } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Button } from "./primitives/Pdf";

let he = require("he");
const alphabet = ["a", "b", "c", "d"];

class Pdf extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    storedRounds: "",
    testStr: "Test",
    url: null,
    size: ""
  };

  componentDidMount() {
    this.setState({ storedRounds: this.props.rootQuestions });
  }

  shouldComponentUpdate(prevProps, nextState) {
    console.log("PREV PROPS", prevProps);
    console.log("CURRENT PROPS", this.props);
    console.log("NEXT STATE", nextState);
    console.log("stored rounds", this.state.storedRounds)
    // let compareArr;
    // this.props.rootQuestions.map(round => {
    //   compareArr.append(round);
    // })
    // this.props.root
    if(this.props.rootQuestions[0] && prevProps.rootQuestions === this.props.rootQuestions){
      return false;
    } else return true;
  }

  onRender = ({ blob }) => {
    console.log("WHAT IS BLOB", blob);
    console.log("WHAT IS PROPS", this.props);
    console.log("WHAT IS STATE", this.state);
    let urlBlob = URL.createObjectURL(blob);
    this.state.url = urlBlob;
    let initialUrl = urlBlob;
    console.log("URL BLOB", urlBlob);
    console.log("STATE URL", this.state.url);
    if (
      this.state.url === null &&
      this.props.rootQuestions &&
      this.props.rootQuestions[0]
    ) {
      let urlBlobChanged = urlBlob;
      this.setState({storedRounds: this.props.rootQuestions})
      console.log("state in onrender", this.state);
      this.setState({ url: urlBlobChanged });
    }
  };

  // onClickWindow = () => {
  //   let x = window.open()
  //   window.open(this.state.url, "/pdf");
  // }

  render() {
    const { pageNumber, numPages } = this.state;

    let storedRounds =
      this.props.rootQuestions && this.props.rootQuestions[0]
        ? this.props.rootQuestions
        : [1, 2, 3];
    console.log("STORED ROUNDS VARIABLE", storedRounds);
    console.log("PROPS", this.props);

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

    if (this.props.rootQuestions[0] && this.props.rootQuestions[0].questions) {
      renderedRounds = storedRounds.map(round=> {
        return (
          <Page style={{ paddingTop: 25, paddingBottom: 25 }} size="A4" wrap>
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
              {round.questions.map((question, index) => {
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
                let mixedAnswers = [1, 2, 3];
                if (question.incorrect_answers) {
                  fixedArray = [
                    ...question.incorrect_answers,
                    question.correct_answer
                  ];
                  mixedAnswers = shuffle(fixedArray);
                }

                if (question.incorrect_answers) {
                  if (
                    mixedAnswers[0] === "True" ||
                    mixedAnswers[0] === "False"
                  ) {
                    mixedAnswers = ["True", "False"];
                  }
                }
                const decodedQuestion =
                  question && question.question
                    ? he.decode(question.question)
                    : "Loading...";
                return (
                  <View wrap={false}>
                    <Text style={{ margin: 30 }}>
                      {index + 1}. {he.decode(decodedQuestion)}
                    </Text>
                    <View>
                      {mixedAnswers.map((answer, index) => {
                        const decodedCorrectAnswer =
                          answer && question.correct_answer
                            ? he.decode(question.correct_answer)
                            : "Loading...";
                        const decodedAnswer =
                          answer && question.correct_answer
                            ? he.decode(answer)
                            : "Loading...";
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

    console.log("rendered rounds children", renderedRounds)

    if (this.props.rootQuestions[0]) {
      return (
        <div>
            {console.log("RENDERED ROUNDS", renderedRounds)}
          <Document shallow onRender={this.onRender}>
            {renderedRounds}
          </Document>
          <Button onClick={() => window.open(this.state.url, "/pdf")}>
            Print Answer Key
          </Button>
        </div>
      );
    } else return <div></div>;
  }
}

export default Pdf;
