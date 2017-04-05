const express = require('express');
var bodyParser = require('body-parser');


const {mongoose} = require('./db/mongoose');
const {Todo} =  require('./models/todo');
const {Users} =  require('./models/user');

var app = express();

app.use(bodyParser.json());

//POST
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });

});

//GET
app.get('/',(req,res)=>{

});


app.listen(3000,()=>{
  console.log('Started on port 3000');
})
