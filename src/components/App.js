import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="container">
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
