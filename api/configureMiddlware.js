const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session"); //npm i express-session

const sessionConfig = {
  name: "monkey", // rename session
  secret: "keep it secret, keep it safe", //encrypt the cookie
  cookie: {
    maxAge: 1000 * 60 * 10, //cookie is valid for an hour?
    secure: false, //should be true in production
    httpOnly: true //cookie can't be accessed from javascript
  },
  resave: false, //if cookie hasn't changed, don't recreate
  saveUninitialized: false //GDPR compliance - laws against setting cookies automatically
}; //session configuration complete

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig)); //turn on the session middleware
  //at this point there is a req.session object created by express session
};
