import {
  FETCH_USERS,
  ANSWER_QUESTION,
  ADD_QUESTION_TO_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_QUESTION:
      const { authedUser, qId, answer } = action;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qId]: answer,
          },
        },
      };

    case ADD_QUESTION_TO_USER:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  }
}
