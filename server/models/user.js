const mongoose = require('mongoose');
var Users = mongoose.model('Users',{
  name:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});

module.exports ={Users};
