var db = require('./db');
var user = require('./user');
db();

var userschema = new user({
    name: "priya 222",
    username: "priyanka 222"
})

userschema.save().then(
    res => {
       console.log(res)
    }, 
    err => {
        console.log(err)
    }

)


