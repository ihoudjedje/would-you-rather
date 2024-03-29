import React from "react";
import { connect } from "react-redux";

const BoardRecord = (props) => {
  const { users, userId, idx } = props;

  const user = users[userId];
  const answredQuestions = Object.keys(user.answers).length;
  const createdQuestions = user.questions.length;
  const score = answredQuestions + createdQuestions;
  const winners = [
    { prize: "Gold", color: "yellow" },
    { prize: "Bronze", color: "orange" },
    { prize: "Silver", color: "gray" },
  ];

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
      <td>
        {score}
        {idx < 3 && (
          <div className={"ui right ribbon label " + winners[idx].color}>
            <i aria-hidden="true" className="winner icon"></i>
            {/* {winners[idx].prize} */}
          </div>
        )}
      </td>
    </tr>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(BoardRecord);
