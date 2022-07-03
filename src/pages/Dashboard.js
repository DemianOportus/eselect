import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";

function Dashboard(props) {
  let navigate = useNavigate();
  const [loadState, setLoadState] = useState(true);
  const [userInfo, setUserInfo] = useState({ email: "", uid: "" });

  let page = (
    <>
      <h1>Email: {userInfo.email}</h1>
      <h1>ID: {userInfo.uid}</h1>
    </>
  );
  function getUser() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({ email: user.email, uid: user.uid });
        setLoadState(false);
        console.log("it worked");
      } else {
        navigate("/login");
        console.log("don't exist");
      }
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      Dashboard
      {loadState ? <h1>Loading...</h1> : page}
    </div>
  );
}

export default Dashboard;
