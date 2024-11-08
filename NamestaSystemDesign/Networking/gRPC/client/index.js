const client = require("./client");

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running at port %d", PORT);
})