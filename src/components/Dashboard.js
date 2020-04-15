import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  state = {
    questionType: "unanswred",
  };
  render() {
    const {
      authedUser,
      questionsAnswredIds,
      questionsUnanswredIds,
    } = this.props;
    const { questionType } = this.state;

    return (
      <div className="dashboard">
        <div className="ui fluid two item pointing menu">
          <div
            className={"item " + (questionType === "unanswred" ? "active" : "")}
            onClick={() =>
              this.setState({
                questionType: "unanswred",
              })
            }
          >
            Unanswred
          </div>
          <div
            className={"item " + (questionType === "answred" ? "active" : "")}
            onClick={() =>
              this.setState({
                questionType: "answred",
              })
            }
          >
            Answred
          </div>
        </div>
        {questionType === "unanswred" && (
          <div className="ui segment active tab">
            {authedUser &&
              questionsUnanswredIds.map((qId) => (
                <div key={qId}>
                  <Question
                    qId={qId}
                    questionType={questionType}
                    source={"dashboard"}
                  />
                  <br />
                </div>
              ))}
          </div>
        )}
        {questionType === "answred" && (
          <div className="ui segment active tab">
            {authedUser &&
              questionsAnswredIds.map((qId) => (
                <div key={qId}>
                  <Question
                    qId={qId}
                    questionType={questionType}
                    source={"dashboard"}
                  />
                  <br />
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  let questionsAnswred = [];
  let questionsUnanswred = [];

  if (authedUser) {
    let userAnswersIds = Object.keys(users[authedUser].answers);
    let sortedQuestions = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
    sortedQuestions.forEach((qId) => {
      if (userAnswersIds.includes(qId)) questionsAnswred.push(qId);
      else questionsUnanswred.push(qId);
    });
  }

  return {
    questionsAnswredIds: authedUser ? questionsAnswred : null,
    questionsUnanswredIds: authedUser ? questionsUnanswred : null,
    authedUser,
  };
}

export default connect(mapStateToProps)(Dashboard);
