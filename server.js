const express = require("express");
const app = express();
const port = 2323;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/languages/en.json", (req, res) => {
  res.sendFile(__dirname + "/languages/en.json");
});

app.get("/api/languages/tr.json", (req, res) => {
  res.sendFile(__dirname + "/languages/tr.json");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
