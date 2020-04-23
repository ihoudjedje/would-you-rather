import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div>
      <h1 className="ui icon header">
        <i aria-hidden="true" className="unlinkify icon"></i>
      </h1>
      <h1>404</h1>
      <h3>Not match for {location.pathname}</h3>
      <div className="sub header">Please make sure you enter a valid URL</div>
    </div>
  );
}

export default NotFound;
