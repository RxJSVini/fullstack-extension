const MongoDB = require('../database')();
const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScheme = new Schema({
    name:{
        type:String,
        allowNull:false,
        unique:true
    },
    email:String,
})

module.exports =  UserScheme;