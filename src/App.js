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
import { AuthProvider } from "./AuthContext.js";
import { FormatPaint } from "@mui/icons-material";
import { Contact } from "./pages/contact.js";
function App() {
  return (
    <Router>
      <>
        <AuthProvider value={"name"}>
          {/* <ResponsiveAppBar/> */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <BootstrapNavbar />
                  <Homepage />
                  <Grid
                    container
                    sx={{ justifyContent: "center" }}
                    id="services"
                  >
                    {cards.map(MultiActionAreaCard)}
                  </Grid>
                  <Footer />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/houseCleaning" element={<HouseCleaning />} />
            <Route path="/loremIpsum" element={<LoremIpsum />} />
            <Route path="/landscaping" element={<Landscaping />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AuthProvider>
      </>
    </Router>
  );
}

export default App;
