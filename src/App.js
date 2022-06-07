import * as React from 'react';
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from "./components/NavBar";



function App() {

  return ( 
  <Router>
    <>
    <ResponsiveAppBar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />

    </Routes>
    </>

  </Router>
  );
}

export default App;
