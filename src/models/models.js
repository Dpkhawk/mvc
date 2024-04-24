const  mongoose  = require("mongoose");

const useSchema=new mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    }
})
const User=mongoose.model('User',useSchema)
module.exports=User