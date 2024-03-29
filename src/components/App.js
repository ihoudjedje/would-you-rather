import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import Login from "./Login";
import NewPoll from "./NewPoll";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import LeaderBoard from "./LeaderBoard";
import Poll from "./Poll";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { isLoading } = this.props;

    return (
      <Router>
        <Fragment>
          {isLoading ? (
            <Route component={Login} />
          ) : (
            <div className="container">
              <Nav />
              <div className="ui center aligned segment">
                <Switch>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/add" component={NewPoll} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/questions/:id" component={Poll} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isLoading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
