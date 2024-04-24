const express=require('express')
const  {getAllUsers,deleteUsers} = require('../controllers/controller')
const route=express.Router()
route.route('/users/:id?')
 .get(getAllUsers)
 .delete(deleteUsers)
module.exports=route