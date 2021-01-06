import React, { Component } from "react";
import quizBank from "./styles/components/quizBank.js";
import QuestionBox from "./styles/components/questionBox";
import Result from "./styles/components/result.js";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };
  queryQuestionBank = () => {
    quizBank().then((question) => {
      this.setState({ questionBank: question });
    });
  };
  componentDidMount() {
    this.queryQuestionBank();
  }
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };
  playAgain = () => {
    this.queryQuestionBank();
    this.setState({ score: 0, responses: 0 });
  };
  render() {
    return (
      <div className="contain">
        <div className="quiz-head">
          <h3 className="quiz-head-text">Your Quiz App</h3>
          <h4>Question 1</h4>
        </div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, options, correct, questionId }) => (
              <QuestionBox
                options={options}
                question={question}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
    );
  }
}

export default App;
