import React from "react";
import { connect } from "react-redux";

const AnswerStats = (props) => {
  const { option, totalVotes, users, authedUser } = props;

  const optionNbrVotes = option.votes.length;
  const optionPercentage = ((optionNbrVotes * 100) / totalVotes).toFixed(2);

  return (
    <div>
      <h3 className="ui top attached header">{option.text}</h3>
      <div className="ui attached segment">
        <div
          className="ui green inverted progress"
          data-percent={optionPercentage}
        >
          <div className="bar" style={{ width: optionPercentage + "%" }}>
            <div className="progress">{optionPercentage} %</div>
          </div>
          <h5>
            {optionNbrVotes} out of {totalVotes} votes
          </h5>
        </div>
        {option.votes.map((voter) => (
          <div
            className={
              "ui image mini label " + (authedUser === voter ? "yellow" : "")
            }
            key={voter}
          >
            <img alt="avatar" src={users[voter].avatarURL} />
            {authedUser === voter ? "YOU" : voter}
          </div>
        ))}
      </div>
    </div>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    users: authedUser ? users : null,
    authedUser,
  };
}

export default connect(mapStateToProps)(AnswerStats);
