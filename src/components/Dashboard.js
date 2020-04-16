import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Poll/Question";

class Dashboard extends Component {
  state = {
    questionType: "unanswred",
  };
  render() {
    const { questionsAnswredIds, questionsUnanswredIds } = this.props;
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
        {questionType === "unanswred" &&
          (questionsUnanswredIds.length === 0 ? (
            <EmptyNotice questionType={questionType} />
          ) : (
            <div className="ui segment active tab">
              {questionsUnanswredIds.map((qId) => (
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
          ))}
        {questionType === "answred" &&
          (questionsAnswredIds.length === 0 ? (
            <EmptyNotice questionType={questionType} />
          ) : (
            <div className="ui segment active tab">
              {questionsAnswredIds.map((qId) => (
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
          ))}
      </div>
    );
  }
}

const EmptyNotice = ({ questionType }) => (
  <div className="notice-container">
    <h1>
      <i
        aria-hidden="true"
        className={
          "icon " +
          (questionType === "unanswred" ? "hand victory" : "hand rock")
        }
      ></i>
    </h1>
    <div className="content">
      <h2>{questionType === "unanswred" ? "Well done!" : "Let's do it!"}</h2>
      <div className="sub header">
        <p>
          {questionType === "unanswred"
            ? "You have answered all of the questions"
            : "No question answered yet :("}
        </p>
      </div>
    </div>
  </div>
);

function mapStateToProps({ users, questions, authedUser }) {
  let questionsAnswredIds = [];
  let questionsUnanswredIds = [];
  const userAnswersIds = Object.keys(users[authedUser].answers);

  let sortedQuestions = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  sortedQuestions.forEach((qId) => {
    if (userAnswersIds.includes(qId)) questionsAnswredIds.push(qId);
    else questionsUnanswredIds.push(qId);
  });

  return {
    authedUser,
    questionsAnswredIds,
    questionsUnanswredIds,
  };
}

export default connect(mapStateToProps)(Dashboard);
