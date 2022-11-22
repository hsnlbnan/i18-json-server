const express = require("express");
const cors = require("cors");

const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/api/login", (req, res) => {});

app.get("/api/locales/en/auth.json", (req, res) => {
  res.sendFile(__dirname + "/locales/en/auth.json");
});
app.get("/api/locales/en/button.json", (req, res) => {
  res.sendFile(__dirname + "/locales/en/button.json");
});
app.get("/api/locales/en/common.json", (req, res) => {
  res.sendFile(__dirname + "/locales/en/common.json");
});

app.get("/api/locales/tr/auth.json", (req, res) => {
  res.sendFile(__dirname + "/locales/tr/auth.json");
});

app.get("/api/locales/tr/button.json", (req, res) => {
  res.sendFile(__dirname + "/locales/tr/button.json");
});
app.get("/api/locales/tr/common.json", (req, res) => {
  res.sendFile(__dirname + "/locales/tr/common.json");
});

// app.get("/api/languages/tr.json", (req, res) => {
//   res.sendFile(__dirname + "/languages/tr.json");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
