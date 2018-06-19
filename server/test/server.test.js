const expect = require('expect');
const request = require('supertest');
const{app} = require('./../server');
const {Todo} = require('./../models/todo');

//Empty databse so that i assumed that dabase is empty

//testing life-cycle method,here done aync func will run after testing everything and it will remove the database
beforeEach((done)=>{

    Todo.remove({}).then(()=> done());
})

describe('POST/todos', ()=>{

 it('should create a new to do', (done)=>{
   var text ='Test todo test';

   request(app)
   .post('/todos')
   .send({text})//add the text to the databse
   .expect(200)
   .expect((res)=>{

    expect(res.body.text).toBe(text);
   })

   .end((err,res)=>{
       if(err){

        return done(err);
       }

       Todo.find().then((todos)=>{

        expect(todos.length).toBe(1)
        expect(todos[0].text).toBe(text);
        done();
       }).catch((e)=> done(e));
   })
 });
 

 it('should not create todo without invalid data', (done)=>{
 

    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res)=>{
     if(err){

        return done(err);
     }
   //to search in databse
     Todo.find().then((todos)=>{
     expect(todos.length).toBe(0)
     done();
     }).catch((e)=> done(e));
    })

 })

});