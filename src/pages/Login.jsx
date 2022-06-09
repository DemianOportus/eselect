import BlackNavbar from "../components/blackNavbar";

function Login() {

      return (
        <div className="loginPage">
          <BlackNavbar />
          <div className="loginText">
            <p className="welcome">Welcome back!</p>
            <h1>Sign in to e-selection</h1>
            <input className="loginInput" placeholder="Username"></input>
            <input className="loginInput" placeholder="Password"></input>
            <button className="loginButton">Login</button>
            <div style={{paddingTop: "17px"}}>
              <a className="signupLink" href="/signup">Sign up</a>
            </div>
          </div>
        </div>
      );
  }
  
  export default Login;  