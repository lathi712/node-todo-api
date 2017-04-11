const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


Todo.remove({}).then((res)=>{
  console.log(res);
});

Todo.findOneAndRemove({text:'Local Stuff'}).then((res)=>{
  console.log(res);
});

Todo.findByIdAndRemove('58e9d4b3c996c8132a67825a').then((res)=>{
  console.log(res);
});
