var express = require("express");
var authRouter = require("./auth");
var goodRouter = require("./good");

var app = express();

// app.use("/auth/", authRouter);
app.use("/good/", goodRouter);

module.exports = app;
