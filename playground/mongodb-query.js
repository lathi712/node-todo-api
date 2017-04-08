const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '58e6ac16d293da152e1f62d3';

if(ObjectID.isValid(id)){
  Todo.find({
    _id:id
  }).then((todos)=>{
    console.log(todos);
  });

  Todo.findOne({
    _id:id
  }).then((todos)=>{
    console.log(todos);
  });

  Todo.findById({
    _id:id
  }).then((todos)=>{
    console.log(todos);
  }).catch((err)=>{
    console.log('Not valid');
  });

}else{
  console.log('Id not found');
}
