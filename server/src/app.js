console.log("Hello World!");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
  res.send({ message: "hello world" });
});



app.listen(process.env.PORT || 8081);

//TODO: Account creation + Auth, Saving character sheets in DB, saving Notes (?), Saving map position on map (?)

// https://youtu.be/Fa4cRMaTDUI?list=PLaRVQcAuLimG_qplzZFU-p6lsSS4czT7e&t=1914
