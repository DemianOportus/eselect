import BlackNavbar from "../components/blackNavbar.jsx";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function login(email, password) {
    console.log(email);
    console.log(password);
    fetch("/api/login/", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((loginUser) => console.log(loginUser));
  }
  return (
    <div className="loginPage">
      <BlackNavbar />
      <div className="loginText">
        <p className="welcome">Welcome back!</p>
        <h1>Sign in to e-selection</h1>
        <input
          className="loginInput"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        ></input>
        <input
          className="loginInput"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        ></input>
        <button className="loginButton" onClick={() => login(email, password)}>
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
