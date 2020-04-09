import { _getUsers, _getQuestions } from "../utils/_DATA";
import { fetchUsers } from "./users";
import { fetchQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_USER_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(fetchUsers(users));
        dispatch(fetchQuestions(questions));
        dispatch(setAuthedUser(AUTHED_USER_ID));
      }
    );
  };
}
