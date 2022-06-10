import BlackNavbar from "../components/blackNavbar";

function Signup(){
    return (
      <div className="loginPage">
        <BlackNavbar />
          <div className="loginText"> 
            <p className="welcome">Join us today!</p>
            <h1>Sign up for free</h1>
            <input className="loginInput" placeholder="Username"></input>
            <input className="loginInput" placeholder="Password"></input>
            <input className="loginInput" placeholder="Confirm password"></input>
            <button onClick={() => alert("Hola")} className="loginButton">Sign up</button>
            <div style={{paddingTop: "17px"}}>
                <a className="loginLink" href="/login">Login</a>
            </div>
        </div>
      </div>
    );
  }

  export default Signup;