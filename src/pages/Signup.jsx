import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.js";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import Alert from "@mui/material/Alert";
import { auth } from "../firebase.js";
import BootstrapNavbar from "../components/NavBarBootstrap";
import { Box } from "@mui/material";

function Signup() {
  let userAuth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function signedUp() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        sendEmailVerification(user).then(() => {
          console.log("sent a verification email");
          console.log("got user");
          navigate("/dashboard");
        });
      } else {
        console.log("did not get user");
      }
    });
  }

  function signUpCheck(email, password, confirmPassword) {
    let success = true;

    if (email === "" && password === "" && confirmPassword === "") {
      setErrorMessage("Please fill-in the form.");
      success = false;
      return success;
    }
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
      await userAuth.signup(email, password);
      if (userAuth.error === "Firebase: Error (auth/invalid-email).") {
        setErrorMessage("This email is invalid.");
        setError(true);
      } else {
        setError(false);
        signedUp();
      }
    } else {
      setError(true);
    }
  }

  return (
    <div className="loginPage">
      <BootstrapNavbar />
      <div className="loginText">
        <p className="welcome">Join us today!</p>
        <h1>Sign up for free</h1>

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

        {error && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: 1,
            }}
          >
            <Alert sx={{ width: "250px" }} variant="filled" severity="error">
              {errorMessage}
            </Alert>
          </Box>
        )}
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
