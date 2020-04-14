import React, { Component } from "react";
import { connect } from "react-redux";

import BoardRecord from "./BoardRecord";

class LeaderBoard extends Component {
  state = {};
  render() {
    const { usersIds } = this.props;
    return (
      <table className="ui celled very basic table">
        <thead className="center aligned">
          <tr>
            <th></th>
            <th>User</th>
            <th>Answered Polls</th>
            <th>Created Polls</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody className="center aligned">
          {usersIds.map((userId) => (
            <BoardRecord userId={userId} key={userId} />
          ))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const ordredUsersIds = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    usersIds: authedUser ? ordredUsersIds : null,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
