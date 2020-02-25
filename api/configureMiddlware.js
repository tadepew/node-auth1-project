const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const sessionConfig = {
  name: "monkey", // rename session
  secret: "keep it secret, keep it safe",
  cookie: {
    maxAge: 1000 * 30, //cookie is valid for 30 seconds
    secure: false, //should be true in production
    httpOnly: true //cookie can't be accessed from javascript
  },
  resave: false,
  saveUninitialized: false //GDPR compliance - laws against setting cookies automatically
}; //session configuration complete

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
};
