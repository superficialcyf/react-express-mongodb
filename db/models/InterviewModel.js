const mongoose = require('mongoose');
const Interview = require('../schemas/schemase');

const Interviews = mongoose.model('interview',Interview);
module.exports = Interviews;