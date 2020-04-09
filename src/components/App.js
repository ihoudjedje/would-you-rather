import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Question from "./Question";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <Question />
      </div>
    );
  }
}

export default connect()(App);
