import React, { Component } from "react";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <h2 className="ui icon header">
        <i aria-hidden="true" className="unlinkify icon"></i>
        <h1>404</h1>
        Not Found :(
        <div className="sub header">
          Please make sure you enter a valid URL & try again!
        </div>
      </h2>
    );
  }
}

export default NotFound;
