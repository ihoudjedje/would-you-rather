import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

class Question extends Component {
  state = {};
  render() {
    const { user, question, authedUser } = this.props;
    const { name, avatarURL, answers, questions } = user;
    const { timestamp, optionOne, optionTwo } = question;
    return (
      <div className="ui card centered">
        <div className="content">
          <img
            alt="avatar"
            src={avatarURL}
            className="ui mini right floated image"
          />
          <div className="header">{name} says:</div>
          <div className="meta">{formatDate(timestamp)}</div>
          <div className="description">
            <strong>Would you rather...?</strong>
          </div>
          <div className="description">{optionOne.text}</div>
          <div className="description">
            <strong>OR</strong>
          </div>
          <div className="description">{optionTwo.text}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <button className="ui green basic button">Answer Poll</button>
          </div>
        </div>
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
export default connect(mapStateToProps)(Question);
