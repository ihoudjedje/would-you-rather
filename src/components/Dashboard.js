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
  let questionsAnswredIds;
  let questionsUnanswredIds;
  let questionsAnswred = [];
  let questionsUnanswred = [];
  if (authedUser) {
    questionsAnswredIds = Object.keys(questions).filter((qId) =>
      Object.keys(users[authedUser].answers).includes(qId)
    );
    questionsUnanswredIds = Object.keys(questions).filter(
      (qId) => !Object.keys(users[authedUser].answers).includes(qId)
    );
    questionsAnswredIds.map((q) => questionsAnswred.push(questions[q]));
    questionsUnanswredIds.map((q) => questionsUnanswred.push(questions[q]));
  }

  return {
    questionsAnswredIds: authedUser ? questionsAnswredIds : null,
    questionsUnanswredIds: authedUser ? questionsUnanswredIds : null,
    authedUser,
    // qIds: authedUser
    //   ? Object.keys(questionsUnanswred).sort(
    //       (a, b) =>
    //         questionsUnanswred[b].timestamp - questionsUnanswred[a].timestamp
    //     )
    //   : null,
  };
}

export default connect(mapStateToProps)(Dashboard);
