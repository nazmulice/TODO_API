const express = require('express');
const app = express();
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router/todoHandler');
//db connection
require('./config/db');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(express.json());
app.use(helmet());
app.use(cors());

//routing
app.use('/todo', router)

//home 
app.get('/', (req, res) => {
  res.send("Home page");
});

//route error
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json(err.message);
});

app.post('/jk', ({ body: { name, age, id } }, res) => {
  
  res.json({ name });

})

module.exports = app;

//password =  nB4nupmVHvVmusWA

