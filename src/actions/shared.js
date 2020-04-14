import { getInitialData } from "../utils/api";
import { fetchUsers } from "./users";
import { fetchQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_USER_ID = "johndoe";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(fetchUsers(users));
      dispatch(fetchQuestions(questions));
      dispatch(setAuthedUser(AUTHED_USER_ID));
    });
  };
}
