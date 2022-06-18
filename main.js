import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
eSelect.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

eSelect.post("/api/newUser", (req, res) => {
  let data = req.body;
  try {
    addDoc(usersCollection, {
      username: data.username,
      email: data.email,
      password: data.password,
    });
    console.log("added a new user");
  } catch (error) {
    console.log("Error: " + error);
  }
  console.log(data);
});

eSelect.listen(port, () => {
  console.log("server has started");
});
