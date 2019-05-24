const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Interview = new schema({
   question:String,
   code:String,
   word:String,
   type:String,
   time:Date
})
module.exports = Interview;