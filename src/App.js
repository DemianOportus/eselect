import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from "./components/NavBar";
// const express = require("express");
// const bodyParser = require("body-parser");




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


// //jshint esversion:8

// // "mongodb+srv://oportus:mongodb321.@projecttest.kiiv0.mongodb.net/myUsers?retryWrites=true&w=majority"
// const mongoose = require('mongoose');

// //connect to MongoDB by specifying port to access MongoDB server
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/myUsers', {useNewUrlParser: true});
//   }// creates new Database if not exist named myUsers.

// const userSchema = new mongoose.Schema({
//   name:String,
//   password:String
// }); // define how to our collection will look alike.

// const User =  mongoose.model("User", userSchema); //
// const userNew = new User  ({
//     name: "John",
//     password: "123"
// })
// const userNew2 = new User  ({
//   name: "Mark",
//   password: "321"
// })
// const userNew3 = new User  ({
//   name: "Luke",
//   password: "222"
// })
// const defaultUsers = [userNew, userNew2, userNew3]

// User.insertMany(defaultUsers, function(err) {
//   err ? console.log(err) : console.log("Successfully saved default users to DB")
//   })

// // const singupTemplate = new mongoose.Schema({
// //     userName: {
// //         type: String,
// //         required: true
// //     },
// //     email: {
// //         type: String,
// //         required: true
// //     },
// //     password: {
// //         type: String,
// //         required: true
// //     },
// //     date: {
// //         type: Date,
// //         default: Date.now
// //     }
// // })