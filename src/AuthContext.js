import React from "react";
import { app, auth } from "./firebase";
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
  const [user, setUser] = useState();
  const [error, setError] = useState("");

  function getCurrentUser() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("email: " + user.email);
        setUser(user);
      } else {
        console.log("No signed in user.");
      }
    });
  }

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((e) => {
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

  let value = {
    user: user,
    signup: signUp,
    getCurrentUser: getCurrentUser,
    login: login,
    signOut: signOut,
    error: error,
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
