import BlackNavbar from "../components/blackNavbar.jsx";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.js";

import Alert from "@mui/material/Alert";
import { async } from "@firebase/util";

function Signup() {
  let auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let alertRef = useRef();

  function signUpCheck(email, password, confirmPassword) {
    let success = true;
    if (email === "") {
      setErrorMessage("Please enter an email address");
      success = false;
      return success;
    }
    if (password === "") {
      setErrorMessage("Please enter a password");
      success = false;
      return success;
    }
    if (confirmPassword === "") {
      setErrorMessage("Please confirm your password");
      success = false;
      return success;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Password dose not match.");
      success = false;
      return success;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at list 6 character");
      success = false;
      return success;
    }
    return success;
  }

  async function createUser(email, password, confirmPassword) {
    let result = signUpCheck(email, password, confirmPassword);
    if (result === true) {
      await auth.signup(email, password);
      if (auth.error === "Firebase: Error (auth/invalid-email).") {
        setErrorMessage("This email is invalid.");
        setError(true);
      }
    } else {
      setError(true);
    }
  }

  return (
    <div className="loginPage">
      <BlackNavbar />
      <div className="loginText">
        <p className="welcome">Join us today!</p>
        <h1>Sign up for free</h1>
        {error && (
          <Alert ref={alertRef} variant="filled" severity="error">
            {errorMessage}
          </Alert>
        )}

        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          className="loginInput"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          className="loginInput"
          placeholder="Password"
        />

        <input
          type="password"
          onChange={(event) => setConfirmPassword(event.target.value)}
          value={confirmPassword}
          className="loginInput"
          placeholder="Confirm password"
        />

        <button
          className="loginButton"
          onClick={(e) => {
            e.preventDefault();
            createUser(email, password, confirmPassword);
          }}
        >
          Sign up
        </button>
        <div style={{ paddingTop: "17px" }}>
          <a className="loginLink" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
