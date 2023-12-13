const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
    
})

// fire a function before user saved to db to hash the password
userSchema.pre('save', async function(next) {
    console.log("creating user here");
    const salt = await bcrypt.genSalt();
    console.log("creating user here 2");
    this.password = await bcrypt.hash(this.password, salt);
    console.log("creating user here 3");
    
    next();
});
  
  // static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
};

module.exports = mongoose.model('User', userSchema)
