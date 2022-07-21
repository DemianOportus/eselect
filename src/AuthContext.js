import React from "react";
import { auth } from "./firebase";
import { useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = React.createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // function getCurrentUser() {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("email: " + user.email);
  //       setUser(user);
  //     } else {
  //       console.log("No signed in user.");
  //     }
  //   });
  // }

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((e) => {
        setUser({});
        console.log("SignUp Error: " + e.message);
        setError(e.message);
      });
  }

  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((e) => {
        console.log("Login Error: " + e.message);
        setError(e.message);
      });
  }

  function signOut() {
    auth.signOut().then(() => {
      setUser({});
      console.log("Signed Out");
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      setUser(user);
    } else {
      console.log("no user");
    }
  });

  let value = {
    user: user,
    signup: signUp,
    login: login,
    signOut: signOut,
    error: error,

    loggedIn: loggedIn,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((e) => {
      console.log("Error: " + e);
    });
}
/**

console.log(UserContext);
function updateUser(user) {
  setUserContext((user) => {
    React.createContext(user);
  });
  console.log(user);
}

export const UpdateUserContext = React.createContext(updateUser);

*/
