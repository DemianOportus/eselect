import * as React from 'react';
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ResponsiveAppBar from "./components/NavBar";
import "../src/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import BootstrapNavbar from "./components/NavBarBootstrap";



function App() {

  return ( 
  <Router>
    <>
    {/* <ResponsiveAppBar/> */}
    
    <Routes>
      <Route path='/' element={
      <div>
        <BootstrapNavbar />
        <Homepage/>
      </div>
      } />
      <Route path='/login' element={<Login/>} />

    </Routes>
    </>

  </Router>
  );
}

export default App;
