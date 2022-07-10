import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import NavBarBootstrap from "../components/NavBarBootstrap";
import { Grid, Container } from "@mui/material";
import DashOption from "../components/dashoption.js";
import DashOptions from "../components/dashoptions.js";
import Footer from "../components/footer.jsx";

function Dashboard(props) {
  let navigate = useNavigate();
  const [loadState, setLoadState] = useState(true);
  const [userInfo, setUserInfo] = useState({ email: "", uid: "" });

  let page = (
    <>
      {/* <h1>ID: {userInfo.uid}</h1> */}

      <NavBarBootstrap />

      <Container>
        <Grid item sx={{ mt: 5 }}>
          <h1 className="subtitle">
            Welcome back <br />{" "}
            <span style={{ fontSize: "4vh", fontWeight: "400" }}>
              {" "}
              {userInfo.email}!{" "}
            </span>
          </h1>
          <hr
            style={{
              backgroundColor: "#1876d0",
              opacity: 100,
              width: "150px",
              height: "4px",
              border: "none",
              margin: "30px auto 80px auto",
            }}
          ></hr>
          {DashOptions.map(DashOption)}
        </Grid>
      </Container>
      <Footer />
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
      {/* Dashboard */}
      {loadState ? <h1>Loading...</h1> : page}
    </div>
  );
}

export default Dashboard;
