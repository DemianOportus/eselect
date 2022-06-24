import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const eSelect = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const firebaseConfig = {
  apiKey: "AIzaSyBYw9o5CINlvaFoOjRi5BWYrvlIYBpdSzE",
  authDomain: "eselect-9074a.firebaseapp.com",
  projectId: "eselect-9074a",
  storageBucket: "eselect-9074a.appspot.com",
  messagingSenderId: "703487908866",
  appId: "1:703487908866:web:474083ac84e094cb181b1b",
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
let usersCollection = collection(dataBase, "user");

eSelect.use(express.static(path.join(__dirname, "build")));
eSelect.use(bodyParser.json());
//URL paths
eSelect.get("/app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

eSelect.post("/api/newUser", (req, res) => {
  let data = req.body;
  let email = data.email;
  let password = data.password;
  const authentication = getAuth();
  createUserWithEmailAndPassword(authentication, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.uid);
      res.json(user);
    })
    .catch((error) => {
      console.log("Error code: " + error.code);
      console.log("Error message: " + error.message);
    });
});

eSelect.post("/api/login", (req, res) => {
  let data = req.body;
  let auth = getAuth();
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userInfo) => {
      let user = userInfo.user;
      console.log("login was a success.");
      console.log(user);
      res.json(user);
    })
    .catch((error) => console.log("Error: " + error.message));
});

eSelect.listen(port, () => {
  console.log("server has started");
});
