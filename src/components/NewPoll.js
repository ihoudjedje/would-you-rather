import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class NewPoll extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    isLoading: false,
  };

  isSubmitButtonActivated = () => {
    const { optionOne, optionTwo } = this.state;

    return optionOne && optionTwo;
  };

  handleOptionOneInput = (e) => {
    let text = e.target.value;

    this.setState({ optionOne: text });
  };

  handleOptionTwoInput = (e) => {
    let text = e.target.value;

    this.setState({ optionTwo: text });
  };

  handleSubmitButton = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    this.setState({ isLoading: true });
    dispatch(handleAddQuestion({ optionOne, optionTwo })).then(() => {
      this.setState({ optionOne: "", optionTwo: "" });
      this.setState({ isLoading: false });
      this.props.history.push("/");
    });
  };

  render() {
    const { optionOne, optionTwo, isLoading } = this.state;

    return (
      <div>
        <div>
          <h2 className="ui icon center aligned header">
            <i aria-hidden="true" className="question circular icon"></i>
            <div className="content">Would you rather...</div>
          </h2>
        </div>
        <form className="ui form">
          <div className="ui placeholder segment">
            {isLoading && (
              <div className="ui active transition visible inverted dimmer">
                <div className="content">
                  <div className="ui text loader">Loading</div>
                </div>
              </div>
            )}
            <div className="ui very relaxed two column grid">
              <div className="column">
                <div className="field">
                  <label>Option 1 </label>
                  <div className="ui input">
                    <input
                      type="text"
                      value={optionOne}
                      placeholder="your option here"
                      onChange={this.handleOptionOneInput}
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="">Option 2 </label>
                  <div className="ui input">
                    <input
                      type="text"
                      value={optionTwo}
                      placeholder="your option here"
                      onChange={this.handleOptionTwoInput}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="ui vertical divider">OR</div>
          </div>
          <br />
          <div>
            <button
              className={
                "container ui button positive " + (isLoading ? "loading" : "")
              }
              onClick={this.handleSubmitButton}
              disabled={!this.isSubmitButtonActivated() || isLoading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(NewPoll));
