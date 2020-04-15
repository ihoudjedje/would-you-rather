import { saveQuestion } from "../utils/api";
import { addQuestionToUser } from "./users";

export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

export function fetchQuestions(questions) {
  return {
    type: FETCH_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addAnswerToQuestion({ authedUser, qId, answer }) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    qId,
    answer,
  };
}

export function handleAddQuestion({ optionOne, optionTwo }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(question));
    });
  };
}
