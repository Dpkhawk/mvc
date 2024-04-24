const User=require('../models/models')

const getAllUsers=(req,res)=>{
    const id=req.params.id
    console.log(id);
    if(id){
        User.find({_id:id}).then(data=>res.json(data)) 
    }
    else{
        User.find().then(data=>res.json(data))
    }
}
const deleteUsers=async(req,res)=>{
    const users=await User.findByIdAndDelete(req.params.id)
    res.json(users)
}
module.exports={getAllUsers,deleteUsers}
