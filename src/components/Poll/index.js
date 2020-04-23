import React, { Component } from "react";
import Question from "./Question";
import NotFound from "../NotFound";

class Poll extends Component {
  state = {};
  render() {
    return typeof this.props.location.state === "undefined" ? (
      <NotFound />
    ) : (
      <Question
        qId={this.props.location.state.qId}
        questionType={this.props.location.state.questionType}
        source={"poll"}
      />
    );
  }
}

export default Poll;
