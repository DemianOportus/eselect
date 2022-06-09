import * as React from 'react';
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ResponsiveAppBar from "./components/NavBar";
import "../src/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import BootstrapNavbar from "./components/NavBarBootstrap";
import Footer from "../src/components/footer";
import MultiActionAreaCard from "../src/components/card";
import cards from "./components/cardInfo";
import Signup from "./pages/Signup";
import Error404 from "./pages/error404";
import Booking from "./pages/booking";
import Landscaping from "./pages/landscaping";
import HouseCleaning from "./pages/houseCleaning";
import LoremIpsum from "./pages/loremIpsum";
import { Grid } from '@mui/material';
import { spacing } from '@mui/system';


function App() {

  return ( 
  <Router>
    <>
    {/* <ResponsiveAppBar/> */}
    <Routes>
      <Route path='/' element={
      <div>
        <BootstrapNavbar />
        <Homepage />
        <Grid container sx={{justifyContent: "center" }} > 
        {cards.map(MultiActionAreaCard)}
        </Grid>
        <Footer />
      </div>
      } />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/404' element={<Error404/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path="/houseCleaning" element={<HouseCleaning/>} />
      <Route path="/loremIpsum" element={<LoremIpsum/>} />
      <Route path="/landscaping" element={<Landscaping/>} />
    </Routes>
    </>

  </Router>
  );
}

export default App;
