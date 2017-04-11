const express = require('express');
var bodyParser = require('body-parser');


const {mongoose} = require('./db/mongoose');
const {Todo} =  require('./models/todo');
const {Users} =  require('./models/user');
const {ObjectID} = require('mongodb');
const port = process.env.port || 3000;

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
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send(todos);
  },(err)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
    Todo.findById(id).then((todo)=>{
      if(!todo){
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((err)=>{
      res.status(400).send();
    })

});


app.listen(port,()=>{
  console.log(`Started on port ${port}`);
})

module.exports = {app};
