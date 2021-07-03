import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

function ResetPass(props) {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailErrMsg, setemailErrMsg] = useState("");
  //Values
  const [email, setemail] = useState("");
  const emailChangeHandler = (e) => {
    setemail(e.target.value);
    setInvalidEmail(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let flag = true;
    if (!validator.isEmail(email)) {
      setInvalidEmail(true);
      setemailErrMsg("Enter valid email address");
      flag = false;
    }
    if (flag) {
      alert("Form Submission done");
    }
  };

  const loginHandler = (e) => {
    props.onAction(1);
  };
  return (
    <div className="main text-main">
      <div className="col-md-6 col-sm-12">
        <h1>Reset Password</h1>
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
            <button type="submit" className="btn btn-black mt-3 mb-2">
              Sent Reset Link
            </button>
            <Link to="/signin">
              <p className="link-para-call">
                <u>Already have an account?</u>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
