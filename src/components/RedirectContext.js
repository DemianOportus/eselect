import React from "react";
import { useState, useContext } from "react";

export const RedirectContext = React.createContext({});

export function useRedirect() {
  return useContext(RedirectContext);
}

export function RedirectProvider(props) {
  const [red, setRed] = useState(false);
  const [name, setName] = useState("");

  let value = { red: red, runUse: setRed, name: name, runName: setName };
  return (
    <RedirectContext.Provider value={value}>
      {props.children}
    </RedirectContext.Provider>
  );
}
