import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/users";
import { withRouter } from "react-router-dom";

class UnanswredQuestionBody extends Component {
  state = {
    checkboxValue: "",
  };

  handleInputChange = (e) => {
    this.setState({ checkboxValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser, qId } = this.props;
    const answer = this.state.checkboxValue;

    dispatch(handleAnswerQuestion({ authedUser, qId, answer }));
    this.props.history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.props.answers;
    const { checkboxValue } = this.state;

    return (
      <form className="ui form">
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="checkbox"
              name="optionOneCheckbox"
              readOnly=""
              tabIndex="0"
              value="optionOne"
              checked={checkboxValue === "optionOne"}
              onChange={this.handleInputChange}
            />
            <label>{optionOne.text}</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="checkbox"
              name="optionTwoCheckbox"
              readOnly=""
              tabIndex="0"
              value="optionTwo"
              checked={checkboxValue === "optionTwo"}
              onChange={this.handleInputChange}
            />
            <label>{optionTwo.text}</label>
          </div>
        </div>
        <div className="ui two buttons">
          <button
            className="ui full button positive"
            disabled={!checkboxValue}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(withRouter(UnanswredQuestionBody));
