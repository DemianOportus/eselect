import * as React from "react";
import Homepage from "./pages/Homepage.js";
import Dashboard from "./pages/Dashboard.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ResponsiveAppBar from "./components/NavBar";
import "../src/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login.jsx";
import BootstrapNavbar from "./components/NavBarBootstrap.jsx";
import Footer from "../src/components/footer.jsx";
import MultiActionAreaCard from "../src/components/card.jsx";
import cards from "./components/cardInfo.js";
import Signup from "./pages/Signup.jsx";
import Error404 from "./pages/error404.jsx";
import Booking from "./pages/booking.jsx";
import Landscaping from "./pages/landscaping.jsx";
import HouseCleaning from "./pages/houseCleaning.jsx";
import LoremIpsum from "./pages/loremIpsum.jsx";
import { Grid } from "@mui/material";
import { spacing } from "@mui/system";

function App() {
  return (
    <Router>
      <>
        {/* <ResponsiveAppBar/> */}
        <Routes>
          <Route
            path="app/"
            element={
              <div>
                <BootstrapNavbar />
                <Homepage />
                <Grid container sx={{ justifyContent: "center" }}>
                  {cards.map(MultiActionAreaCard)}
                </Grid>
                <Footer />
              </div>
            }
          />
          <Route path="app/login" element={<Login />} />
          <Route path="app/signup" element={<Signup />} />
          <Route path="app/404" element={<Error404 />} />
          <Route path="app/booking" element={<Booking />} />
          <Route path="app/houseCleaning" element={<HouseCleaning />} />
          <Route path="app/loremIpsum" element={<LoremIpsum />} />
          <Route path="app/landscaping" element={<Landscaping />} />
          <Route path="app/dashboard/:id" element={<Dashboard />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
