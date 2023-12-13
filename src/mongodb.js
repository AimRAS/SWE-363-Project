const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://azzoz2001:qweewq@events.xhyg2wu.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("mongo connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const logInSchema = new mongoose.Schema({
    username:{
        type:String
        
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const collection= new mongoose.model("events",logInSchema)

module.exports = collection