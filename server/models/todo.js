var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {

    text:{
      type: String,
      //validators
      required: true,
      minlength:1,
      trim:true //for string will remove space
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt :{
        type:Number,
        default: null
    }
});

module.exports = {Todo}