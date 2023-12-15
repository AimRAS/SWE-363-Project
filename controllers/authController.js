const User = require("../models/user");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};

module.exports.signup_get = (req, res) => {
    res.render('signup');
  }
  
module.exports.login_get = (req, res) => {
  const err = {}
  const email = ""
  const password = ""
    res.render('login', {email, password, err});
}

module.exports.signup_post = async (req, res) => {
  // console.log("the post req is sent");
    const { email, password, username } = req.body;
  ;
    try {
      const user = await User.create({ email: email, password: password, username: username });
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.redirect('/')
    //   res.status(201).json({ user: user._id });
    }
    catch(err) {
    //   const errors = handleErrors(err);
    //   res.status(400).json({ errors });
    // console.log(err);
    }
   
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.redirect('/')
    // res.status(200).json({ user: user._id });
  } 
  catch (err) {
    if (err.message === "incorrect password") {
      console.log("checkinng incorrect");
    } 
    // // if (err == )
    // console.log(err.message);
    res.render('login', {
      err, 
      email, 
      password})
    // const errors = handleErrors(err);
    // res.status(400).json({ errors });
  }

}

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}