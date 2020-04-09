import {
  FETCH_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER_TO_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question,
      };
    case ADD_ANSWER_TO_QUESTION:
      const { authedUser, qId, answer } = action;

      return {
        ...state,
        [qId]: {
          ...state[qId],
          [answer]: {
            ...state[qId][answer],
            votes: state[qId][answer].votes.concat(authedUser),
          },
        },
      };
    default:
      return state;
  }
}
