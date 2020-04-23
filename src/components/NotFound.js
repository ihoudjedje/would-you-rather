import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <h2 className="ui icon header">
      <i aria-hidden="true" className="unlinkify icon"></i>
      <h1>404</h1>
      Not match for {location.pathname}
      <br />
      <br />
      <div className="sub header">Please make sure you enter a valid URL</div>
    </h2>
  );
}

export default NotFound;
