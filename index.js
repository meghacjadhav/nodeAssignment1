var fs = require("fs");
const express = require("express");
const app = express();

fs.appendFile(
  "index.html",
  "<html><body><h1> Hello World </h1> <p> This is Megha! </p></body></html>",
  (err) => {
    if (err) console.log(err);
    console.log("Saved!");
  }
);
app.get("/", (req, res) => {
  res.sendFile(
    "/Users/me20184622/Desktop/10X ACADEMY/Practice Session/NodeSimpleHttpServer/index.html"
  );
});
app.listen(3000, () => console.log("Server is listening at port 3000"));
