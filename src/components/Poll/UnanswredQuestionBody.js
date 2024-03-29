import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAnswerQuestion } from "../../actions/users";

class UnanswredQuestionBody extends Component {
  state = {
    checkboxValue: "",
    isLoading: false,
  };

  handleInputChange = (e) => {
    this.setState({ checkboxValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser, question } = this.props;
    const answer = this.state.checkboxValue;
    const qId = question.id;

    this.setState({ isLoading: true });
    dispatch(handleAnswerQuestion({ authedUser, qId, answer })).then(() => {
      this.setState({ isLoading: false });
      this.props.history.push({
        pathname: `/questions/${qId}`,
        state: { questionType: "answred", qId },
      });
    });
  };

  render() {
    const { optionOne, optionTwo } = this.props.question;
    const { checkboxValue, isLoading } = this.state;

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
            className={
              "ui full button positive " + (isLoading ? "loading" : "")
            }
            disabled={!checkboxValue || isLoading}
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
