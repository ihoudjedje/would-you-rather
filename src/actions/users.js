import { _saveQuestionAnswer } from "../utils/_DATA";
import { addAnswerToQuestion } from "./questions";

export const FETCH_USERS = "FETCH_USERS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function fetchUsers(users) {
  return {
    type: FETCH_USERS,
    users,
  };
}

function answerQuestion({ authedUser, qId, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qId,
    answer,
  };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author,
  };
}

export function handleAnswerQuestion({ authedUser, qId, answer }) {
  return (dispatch, getState) => {
    // const { authedUser } = getState();

    return _saveQuestionAnswer({
      authedUser,
      qid: qId,
      answer,
    }).then(() => {
      dispatch(answerQuestion({ authedUser, qId, answer }));
      dispatch(addAnswerToQuestion({ authedUser, qId, answer }));
    });
  };
}
