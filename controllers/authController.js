const User = require("../models/User");
const jwt = require('jsonwebtoken');


module.exports.signup_get = (req, res) => {
    res.render('signup');
  }
  
  module.exports.login_get = (req, res) => {
    res.render('login');
  }