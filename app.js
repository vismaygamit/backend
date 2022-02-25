const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const productRoutes=require("./api/routes/product");

const app = express();
mongoose
  .connect(
    "mongodb+srv://vismay:Tanvi8758116124@cluster0.ikpvs.mongodb.net/shoppingdemo?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
// QuBqs0T45GDKPlIG

// autoIncrement.initialize(connection);

app.use("/api/product", productRoutes);

module.exports = app;
