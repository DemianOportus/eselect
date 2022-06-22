import BlackNavbar from "../components/blackNavbar";
import React, { useState } from "react";

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
      return response;
    })
    .then(() => navigate("/homepage"))
    .catch((response) => response)
    .then((response) => response.text())
    .then((data) => alert(data));
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          onClick={(event) => verifyUser(email, password)}
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
