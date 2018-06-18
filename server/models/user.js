var mongoose = require('mongoose');

var User = mongoose.model('User', {
    
        email:{
            type: String,
            //validators
            required: true,
            minlength:1,
            trim:true //for string will remove space
          }
    
    });

module.exports = {User};