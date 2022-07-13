import { useState } from "react";
import { useAuth } from "../AuthContext.js";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import BootstrapNavbar from "../components/NavBarBootstrap";
import Footer from "../components/footer.jsx";
import { Box } from "@mui/material";

function Login() {
  let userAuth = useAuth();
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function loginCheck(email, password) {
    let success = true;

    console.log(">>" + email);
    if (email === "" && password === "") {
      setErrorMessage("Please please enter your email and password.");
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
    return success;
  }

  function loggedInUser() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("loggedIn");
        navigate("/dashboard");
      } else {
        console.log("did not login");
      }
    });
  }

  async function login(email, password) {
    let result = loginCheck(email, password);
    console.log(result);
    if (result === true) {
      await userAuth.login(email, password);
      if (userAuth.error === "Firebase: Error (auth/invalid-email).") {
        setErrorMessage("This email is invalid.");
        setError(true);
      } else if (userAuth.error === "Firebase: Error (auth/wrong-password).") {
        setErrorMessage("This password is incorrect.");
        setError(true);
      } else {
        loggedInUser();
      }
    } else {
      setError(true);
    }
  }

  return (
    <div className="loginPage">
      <BootstrapNavbar />
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
      <Footer />
    </div>
  );
}

export default Login;
