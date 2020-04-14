import React from "react";
import { connect } from "react-redux";

const AnswredQuestionBody = (props) => {
  const { optionOne, optionTwo } = props.question;

  const optionOneNbrVotes = optionOne.votes.length;
  const optionTwoNbrVotes = optionTwo.votes.length;
  const votesNumber = optionOneNbrVotes + optionTwoNbrVotes;
  const optionOnePercentage = (optionOneNbrVotes * 100) / votesNumber;
  const optionTwoPercentage = (optionTwoNbrVotes * 100) / votesNumber;

  return (
    <div>
      <h3 className="ui top attached header">{optionOne.text}</h3>
      <div className="ui attached segment">
        <div
          className="ui green inverted progress"
          data-percent={optionTwoPercentage}
        >
          <div className="bar" style={{ width: optionOnePercentage + "%" }}>
            <div className="progress">{optionOnePercentage} %</div>
          </div>
          <h5>
            {optionOneNbrVotes} out of {votesNumber} votes
          </h5>
        </div>
        {optionOne.votes.map((voter) => (
          <div className="ui image mini label" key={voter}>
            <img alt="avatar" src={props.users[voter].avatarURL} />
            {voter}
          </div>
        ))}
      </div>
      <h3 className="ui top attached header">{optionTwo.text}</h3>
      <div className="ui attached segment">
        <div
          className="ui green inverted progress"
          data-percent={optionTwoPercentage}
        >
          <div className="bar" style={{ width: optionTwoPercentage + "%" }}>
            <div className="progress">{optionTwoPercentage} %</div>
          </div>
          <h5>
            {optionTwoNbrVotes} out of {votesNumber} votes
          </h5>
        </div>
        {optionTwo.votes.map((voter) => (
          <div className="ui image mini label" key={voter}>
            <img alt="avatar" src={props.users[voter].avatarURL} />
            {voter}
          </div>
        ))}
      </div>
    </div>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(AnswredQuestionBody);
