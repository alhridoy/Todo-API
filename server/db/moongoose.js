var mongoose = require('mongoose');

//connecting to mongodb databse
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports ={mongoose};