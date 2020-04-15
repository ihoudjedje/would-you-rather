<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuestionActionButton extends Component {
  state = {};

  handleButton = () => {
    const { questionType, qId, source } = this.props;

    if (source === "dashboard") {
      return {
        pathname: `/questions/${qId}`,
        state: { questionType, qId },
      };
    }
    if (source === "poll" && questionType === "answred") {
      return "/";
    }
    return null;
  };

  render() {
    const { questionType, source } = this.props;

    const buttonText =
      source === "poll"
        ? questionType === "unanswred"
          ? "Submit"
          : "Go Back"
        : questionType === "unanswred"
        ? "Answer Poll"
        : "View Results";

    const buttonBgColor = questionType === "unanswred" ? "green" : "orange";

    return (
      <Link className="ui two buttons" to={this.handleButton}>
        <button className={"ui full button " + buttonBgColor}>
          {buttonText}
        </button>
      </Link>
    );
  }
}
export default QuestionActionButton;
=======
import React from "react";
=======
import React, { Component } from "react";
>>>>>>> ecc27ac... feat: add QuestionActionButton component 2
import { Link } from "react-router-dom";

class QuestionActionButton extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton = () => {
    const { source, questionType } = this.props;

    if (source === "poll" && questionType === "unanswred") {
      // submit answer
    }
    if (source === "poll" && questionType === "answred") {
      this.props.history.goBack();
    }
  };

<<<<<<< HEAD
  return (
    <Link
      className="ui two buttons"
      to={{
        pathname: `/questions/${qId}`,
        state: { questionType, qId },
      }}
    >
      <button className={"ui full button " + buttonBgColor}>
        {buttonText}
      </button>
    </Link>
  );
};
>>>>>>> 73a80e1... feat: add QuestionActionButton component
=======
  render() {
    const { questionType, qId, source } = this.props;

    const buttonText =
      source === "poll"
        ? questionType === "unanswred"
          ? "Submit"
          : "Go Back"
        : questionType === "unanswred"
        ? "Answer Poll"
        : "View Results";

    const buttonBgColor = questionType === "unanswred" ? "green" : "orange";

    return (
      <Link
        className="ui two buttons"
        to={{
          pathname: `/questions/${qId}`,
          state: { questionType, qId },
        }}
      >
        <button
          className={"ui full button " + buttonBgColor}
          onClick={this.handleButton}
        >
          {buttonText}
        </button>
      </Link>
    );
  }
}
export default QuestionActionButton;
>>>>>>> ecc27ac... feat: add QuestionActionButton component 2
