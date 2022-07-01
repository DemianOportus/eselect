import BlackNavbar from "../components/blackNavbar.jsx";
import { useState } from "react";
import { useAuth } from "../AuthContext.js";
import { async } from "@firebase/util";

function Login() {
  let auth = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function login(email, password) {
    console.log(">" + email);
    console.log(">" + password);
    await auth.login(email, password);
    auth.getCurrentUser();
  }

  return (
    <div className="loginPage">
      <BlackNavbar />
      <div className="loginText">
        <p className="welcome">Welcome back!</p>
        <h1>Sign in to e-selection</h1>
        {/**auth.user.email == !undefined && <h1>{auth.user.email}</h1>**/}
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
        <button
          className="loginButton"
          onClick={(e) => {
            e.preventDefault();
            login(email, password);
          }}
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
