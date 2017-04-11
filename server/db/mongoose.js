const mongoose = require('mongoose');
const mlabUrl = "mongodb://root:qwerty@ds159220.mlab.com:59220/todoappnode";
const url = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || url);

module.exports = {mongoose};
