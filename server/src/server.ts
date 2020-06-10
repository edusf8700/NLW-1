import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Eduardo")
});

app.listen(3333);