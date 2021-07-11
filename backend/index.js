require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

// Mongodb connection
mongoose
  .connect(process.env.mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((data) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Inbuilt Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type','Accept','Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// Require Routes
const placeRoutes = require("./routes/places");
const userRoutes = require("./routes/user");
app.use("/api/places", placeRoutes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
