import React, { Component } from "react";
import Question from "./Question";
import NotFound from "../NotFound";
import { connect } from "react-redux";

class Poll extends Component {
  state = {};
  render() {
    const { validQuestionId, questionType, match } = this.props;

    return !validQuestionId ? (
      <NotFound />
    ) : (
      <Question
        qId={match.params.id}
        questionType={questionType}
        source={"poll"}
      />
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
  return {
    validQuestionId: typeof questions[match.params.id] !== "undefined",
    questionType: Object.keys(users[authedUser].answers).includes(
      match.params.id
    )
      ? "answred"
      : "unanswred",
  };
}

export default connect(mapStateToProps)(Poll);
