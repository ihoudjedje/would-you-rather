import React from "react";
import { connect } from "react-redux";

const BoardRecord = (props) => {
  const { users, userId } = props;

  const user = users[userId];
  const answredQuestions = Object.keys(user.answers).length;
  const createdQuestions = user.questions.length;
  const score = answredQuestions + createdQuestions;

  return (
    <tr>
      <td>
        <img
          alt="avatar"
          src={user.avatarURL}
          className="ui tiny image centered"
        />
      </td>
      <td>
        <h4 className="ui image header">
          <div>
            {user.name}
            <div className="sub header">{user.id}</div>
          </div>
        </h4>
      </td>
      <td>{answredQuestions}</td>
      <td>{createdQuestions}</td>
      <td>{score}</td>
    </tr>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    users: authedUser ? users : null,
  };
}

export default connect(mapStateToProps)(BoardRecord);
