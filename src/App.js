import * as React from "react";
import Homepage from "./pages/Homepage.js";
import Dashboard from "./pages/Dashboard.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
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
import Settings from "./pages/Settings.js";
// import Landscaping from "./pages/landscaping.jsx";
// import HouseCleaning from "./pages/houseCleaning.jsx";
import AboutService from "./pages/aboutService.js";
import { Grid } from "@mui/material";
import { AuthProvider } from "./AuthContext.js";
import { FormatPaint } from "@mui/icons-material";
import { Contact } from "./pages/contact.js";
import OurServicesSubtitle from "./components/ourServicesSubtitle.js";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App(props) {
  let { serviceId } = useParams();

  return (
    <Router>
      <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AuthProvider>
            {/* <ResponsiveAppBar/> */}
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <BootstrapNavbar />
                    <Homepage />
                    <OurServicesSubtitle />
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
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/aboutService"
                element={
                  <div>
                    <BootstrapNavbar />
                    {cards.map(AboutService)}
                  </div>
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AuthProvider>
        </LocalizationProvider>
      </>
    </Router>
  );
}

export default App;
