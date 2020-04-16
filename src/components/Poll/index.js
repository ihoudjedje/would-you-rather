import React, { Component } from "react";
import Question from "./Question";

class Poll extends Component {
  state = {};
  render() {
    const { questionType, qId } = this.props.location.state;

    return <Question qId={qId} questionType={questionType} source={"poll"} />;
  }
}

export default Poll;
