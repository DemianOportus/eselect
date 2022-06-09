import * as React from 'react';
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ResponsiveAppBar from "./components/NavBar";
import "../src/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import BootstrapNavbar from "./components/NavBarBootstrap";
import Footer from "../src/components/footer";
import createCard from "../src/components/card";
import cards from "./components/cardInfo";
import Signup from "./pages/Signup";
import Error404 from "./pages/error404";


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
        {cards.map(createCard)}
        <Footer />
      </div>
      } />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/404' element={<Error404/>} />
    </Routes>
    </>

  </Router>
  );
}

export default App;
