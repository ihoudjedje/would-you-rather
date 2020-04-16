import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Nav = (props) => {
  const { dispatch, authedUser, users } = props;

  const handleLogout = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(setAuthedUser(null));
    },
    [dispatch]
  );

  return (
    <div className="ui equal width grid">
      <div className="column">
        <div className="ui secondary menu">
          <NavLink className="item" to="/" exact>
            Home
          </NavLink>
          <NavLink className="item" to="/add">
            New Poll
          </NavLink>
          <NavLink className="item" to="/leaderboard">
            Leader Boards
          </NavLink>
        </div>
      </div>
      <div className="five wide column"></div>
      <div className="column right">
        <div className="ui left labeled button" role="button" tabIndex="0">
          <img
            alt="avatar"
            src={authedUser ? users[authedUser].avatarURL : ""}
            className="ui mini middle aligned image"
          />
          <h3 className="ui basic label">{authedUser}</h3>
          <button className="ui red icon button" onClick={handleLogout}>
            <i aria-hidden="true" className="log out icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Nav);
