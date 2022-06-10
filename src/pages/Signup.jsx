import BlackNavbar from "../components/blackNavbar";
import React from "react";
import { useState } from "react";

function createUser(email, username, password, confirmPassword) {
  fetch('/users', {
    method: "POST",
    body: JSON.stringify({
      email: email,
      username: username,
      password: password,
      confirmPassword: confirmPassword
      
  }),
  headers: {
    "Content-Type": "application/json"
}
  
  })
  .then(response => response.text())
  .then(data => alert(data));
}


function Signup(){
  const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
      <div className="loginPage">
        <BlackNavbar />
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
              onChange={(event) => setUsername(event.target.value)} 
              value={username} 
              className="loginInput" 
              placeholder="Username"
            />
            <input 
              onChange={(event) => setPassword(event.target.value)} 
              value={password} 
              className="loginInput" 
              placeholder="Password"/>

            <input 
              onChange={(event) => setConfirmPassword(event.target.value)} 
              value={confirmPassword} 
              className="loginInput" 
              placeholder="Confirm password"/>

            <button className="loginButton" onClick={ () => createUser(username, password, confirmPassword) }>Sign up</button>
            <div style={{paddingTop: "17px"}}>
                <a className="loginLink" href="/login">Login</a>
            </div>
        </div>
      </div>
    );
  }

  export default Signup;