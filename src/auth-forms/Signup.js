import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

function Signup(props) {
  //Error set true
  const [invalidEmail, setinvalidEmail] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidPasswordConfirmation, setInvalidPasswordConfirmation] =
    useState(false);

  //Error mesage settings
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [passErrMsg, setPassErrMsg] = useState("");
  const [passConfirmErrMsg, setPassConfirmErrMsg] = useState("");

  //Values of form fields
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");

  //Buttons Handling
  const resetHandler = (event) => {
    event.preventDefault();
    setemail("");
    setName("");
    setpassword("");
    setpasswordConfirmation("");
  };
  const emailChangeHandler = (e) => {
    setemail(e.target.value);
    setinvalidEmail(false);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setpassword(e.target.value);
    setInvalidPassword(false);
  };
  const passwordConfirmChangeHandler = (e) => {
    setpasswordConfirmation(e.target.value);
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
  const signInHandler = (e) => {
    // e.preventDefault();
    props.onAction(1);
  };
  return (
    <div className="main-register text-main">
      <div className="col-md-6 col-sm-12">
        <h1>Sign Up</h1>
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
              <label className="mt-2 mb-2">Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={nameChangeHandler}
              />
            </div>
            {invalidName && <p className="errorMessage">{nameErrMsg}</p>}

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

            <div className="form-group">
              <label className="mt-2 mb-2">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Retype password"
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={passwordConfirmChangeHandler}
              />
            </div>
            {invalidPasswordConfirmation && (
              <p className="errorMessage">{passConfirmErrMsg}</p>
            )}

            <button type="submit" className="btn btn-black mt-2 mb-2 mr-2">
              Register
            </button>
            <button
              className="btn btn-secondary mt-2 mb-2"
              onClick={resetHandler}
            >
              Reset
            </button>
            <Link to="/signin">
              <p className="link-para-call">
                <u>Have your account? Signin here</u>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
