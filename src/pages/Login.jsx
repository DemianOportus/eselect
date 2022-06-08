function Login() {
    const isRegistered = false;
  
    if (isRegistered === true) {
      return (
        <div className="loginPage">
            <p className="welcome">Welcome back!</p>
            <h1>Sign in to e-selection</h1>
            <input className="loginInput" placeholder="Username"></input>
            <input className="loginInput" placeholder="Password"></input>
            <button className="loginButton">Login</button>
        </div>
      );
    } else {
      return (
        <div className="loginPage">
            <p className="welcome">Join us today!</p>
          <h1>Sign up for free</h1>
          <input className="loginInput" placeholder="Username"></input>
          <input className="loginInput" placeholder="Password"></input>
          <input className="loginInput" placeholder="Confirm password"></input>
          <button className="loginButton">Sign up</button>
        </div>
      );
    }
  }
  
  export default Login;  