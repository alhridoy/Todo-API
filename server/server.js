var express = require('express');
var bodyParser = require('body-parser')

var{mongoose} = require('./db/moongoose');
var{Todo} = require('./models/todo');
var{User} = require('./models/user')
var app = express();
    //Middleware
 app.use(bodyParser.json());
app.post('/todos', (req,res)=>{
var todo = new Todo({
    text: req.body.text
});

  //body-parser take json and convert it into an Object

  todo.save().then((doc)=>{
  
     res.send(doc);
  },(e)=>{
     res.status(400).send(e);
  })
});



app.listen(3000,()=>{
    console.log('Started on port 3000')
});