import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {};

  handleOnSignUp = (e) => {
    const { dispatch } = this.props;
    const authedUser = e.target.value;

    dispatch(setAuthedUser(authedUser));
  };

  render() {
    const { users, isLoading } = this.props;
    console.log(users);

    return (
      <div className="container">
        <div className="ui center aligned header">
          <h2 className="ui icon header">
            <i aria-hidden="true" className="shield alternate icon yellow"></i>
            Authentication
            <br />
            <br />
            <div className="sub header">
              Please choose a user below or create a new one!
            </div>
          </h2>
          <div role="list" className="ui divided center aligned list">
            <div className="ui card centered">
              <div className="content">
                <div className="header">Users</div>
              </div>
              <div className="content">
                <div className="ui feed">
                  {isLoading ? (
                    <div className="ui active transition visible inverted dimmer">
                      <div className="content">
                        <div className="ui text loader">Loading</div>
                      </div>
                    </div>
                  ) : (
                    Object.keys(users).map((user) => (
                      <div role="listitem" className="item event" key={user}>
                        <img
                          alt="avatar"
                          className="ui mini middle aligned avatar image"
                          src={users[user].avatarURL}
                        />
                        <div className="content">
                          <h5>{users[user].name}</h5>
                        </div>
                        <div className="right floated">
                          <button
                            className="ui mini button"
                            onClick={this.handleOnSignUp}
                            value={user}
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    isLoading: Object.keys(users).length === 0,
  };
}

export default connect(mapStateToProps)(Login);
