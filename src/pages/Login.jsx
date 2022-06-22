import BlackNavbar from "../components/blackNavbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

var isLoggedIn = false;

function verifyUser(email, password, navigate) {
  fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      isLoggedIn = true;
      return response;
    })
    .then(() => navigate("/"))
    .catch((response) => response)
    .then((response) => response.text())
    .then((data) => alert(data));
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div className="loginPage">
      <BlackNavbar />
      <div className="loginText">
        <p className="welcome">Welcome back!</p>
        <h1>Sign in to e-selection</h1>
        <input
          onChange={(event) => setEmail(event.target.value)}
          className="loginInput"
          placeholder="Email"
        ></input>
        <input
          onChange={(event) => setPassword(event.target.value)}
          className="loginInput"
          placeholder="Password"
        ></input>
        <button
          onClick={() => verifyUser(email, password, navigate)}
          className="loginButton"
        >
          Login
        </button>
        <div style={{ paddingTop: "17px" }}>
          <a className="signupLink" href="/signup">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
