import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../../utils/helpers";
import { withRouter } from "react-router-dom";
import QuestionActionButton from "./QuestionActionButton";
import UnanswredQuestionBody from "./UnanswredQuestionBody";
import AnswredQuestionBody from "./AnswredQuestionBody";

class Question extends Component {
  state = {};
  render() {
    const { user, question, qId, questionType, source } = this.props;
    const { name, avatarURL } = user;
    const { timestamp, optionOne } = question;

    return (
      <div className="ui card centered">
        <div className="content">
          <img
            alt="avatar"
            src={avatarURL}
            className="ui mini circular image"
          />
          <br />
          <br />
          <div className="header">{name} says:</div>
          <div className="meta">{formatDate(timestamp)}</div>
          <div className="description">
            <strong>Would you rather...?</strong>
          </div>
          <br />
          {source === "dashboard" && (
            <div>
              <p className="description">
                {optionOne.text} <br /> or ...
              </p>
            </div>
          )}
          {source === "poll" && questionType === "unanswred" && (
            <UnanswredQuestionBody question={question} />
          )}
          {source === "poll" && questionType === "answred" && (
            <AnswredQuestionBody question={question} />
          )}
        </div>
        {!(source === "poll" && questionType === "unanswred") && (
          <div className="extra content">
            <QuestionActionButton
              questionType={questionType}
              qId={qId}
              source={source}
            />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { qId }) {
  const question = questions[qId];
  const user = users[question.author];

  return {
    user,
    question,
    authedUser,
  };
}
export default withRouter(connect(mapStateToProps)(Question));
