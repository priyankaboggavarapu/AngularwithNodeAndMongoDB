
var mongoose = require('mongoose');

module.exports = ()=>{
 
mongoose.connect('mongodb://localhost/mongoose_basics', { useNewUrlParser: true }, function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

}