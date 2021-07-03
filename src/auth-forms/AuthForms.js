import React, { useState } from "react";
import "./AuthForms.css";
import Login from "./Login";
import ResetPass from "./ResetPass";
import Signup from "./Signup";
function AuthForms(props) {
  //1->Login form
  const signedIn = props.signedIn;
  const actionHandler = (val) => {};
  console.log(props.signedIn);
  return (
    <div>
      <div className="sidenav">
        <div className="login-main-text">
          <img
            src="/logo-white.png"
            className="sidenav-logo"
            alt="Company-logo"
          />
          <h1 className="company-header">
            Blue
            <br />
            Jeans Co.
          </h1>
          <p>Denim is a love that never fades.</p>
        </div>
      </div>
      {props.signedIn === 1 && <Login onAction={actionHandler} />}
      {props.signedIn === 2 && <Signup onAction={actionHandler} />}
      {props.signedIn === 3 && <ResetPass onAction={actionHandler} />}
    </div>
  );
}

export default AuthForms;
