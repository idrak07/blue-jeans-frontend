import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
// import { useForm } from "react-hook-form";

function Login(props) {
  const [invalidEmail, setinvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [passErrMsg, setPassErrMsg] = useState("");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const openRegisterForm = (event) => {
    // event.preventDefault();
    // console.log("Clicked");
    props.onAction(3);
  };
  const emailChangeHandler = (e) => {
    setemail(e.target.value);
    setinvalidEmail(false);
  };

  const passwordChangeHandler = (e) => {
    setpassword(e.target.value);
    setInvalidPassword(false);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    let flag = true;
    if (!validator.isEmail(email)) {
      setinvalidEmail(true);
      setEmailErrMsg("Enter valid email");
      flag = false;
    }
    if (password.length < 8) {
      flag = false;
      setInvalidPassword(true);
      setPassErrMsg("Enter valid password");
    }
    if (flag) {
      alert("Form Submission done");
    }
  };
  const passResetHandler = (e) => {
    props.onAction(2);
  };
  return (
    <div className="main text-main">
      <div className="col-md-6 col-sm-12">
        <h1>Sign In</h1>
        <div className="login-form">
          <form method="POST" onSubmit={formSubmitHandler} noValidate={true}>
            <div className="form-group">
              <label className="mt-2 mb-2">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email address"
                name="email"
                value={email}
                onChange={emailChangeHandler}
              />
            </div>
            {invalidEmail && <p className="errorMessage">{emailErrMsg}</p>}
            <div className="form-group">
              <label className="mt-2 mb-2">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={passwordChangeHandler}
              />
            </div>
            {invalidPassword && <p className="errorMessage">{passErrMsg}</p>}
            <button type="submit" className="btn btn-black mt-2 mb-2 mr-2">
              Login
            </button>
            <Link className="btn btn-secondary mt-2 mb-2" to="/register">
              Register
            </Link>
            <Link to="/reset-password">
              <p className="link-para-call">
                <u>Forgot your password?</u>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
