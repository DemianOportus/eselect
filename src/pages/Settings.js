import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { onAuthStateChanged } from "firebase/auth";
import { Button, TextField, Container, Box } from "@mui/material";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

function Settings() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  async function handleClick() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const id = user.uid;
        const path = "/Users/" + id + "/location";
        let users = doc(db, path, "Main");
        await setDoc(users, {
          Address: address,
          City: city,
          Postal_code: postalCode,
          Province: province,
        });
        // console.log("user is logged in");
        // let q = query(users, where("City", "==", "Montreal"));
        // const querySnapshot = await getDocs(q);
        // console.log("working");
        // querySnapshot.forEach((doc) => {
        //   console.log(doc.data());
        // });
      } else {
        console.log("no user");
      }
    });
    console.log(address);
    console.log(city);
    console.log(province);
    console.log(postalCode);
  }

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>Location</h2>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              onChange={(e) => {
                setAddress(e.target.value);
                console.log(address);
              }}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="City"
              onChange={(e) => {
                setCity(e.target.value);
                console.log(city);
              }}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Province"
              onChange={(e) => {
                setProvince(e.target.value);
                console.log(province);
              }}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Postal Code"
              onChange={(e) => {
                setPostalCode(e.target.value);
                console.log(postalCode);
              }}
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
              padding: "10px",
            }}
          >
            <Button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              Save location
            </Button>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Settings;
