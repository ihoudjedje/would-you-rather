import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import NewPoll from "./NewPoll";
import Dashboard from "./Dashboard";
import AnswredPollPage from "./AnswredPollPage";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Nav />
            <div class="ui segment active tab">
              <Route path="/" exact component={Dashboard} />
              <Route path="/add" component={NewPoll} />
              <Route path="/questions/:id" component={AnswredPollPage} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
