import React from "react";

import AnswerStats from "./AnswerStats";

const AnswredQuestionBody = (props) => {
  const { optionOne, optionTwo } = props.question;

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;

  return (
    <div>
      <AnswerStats option={optionOne} totalVotes={totalVotes} />
      <AnswerStats option={optionTwo} totalVotes={totalVotes} />
    </div>
  );
};

export default AnswredQuestionBody;
