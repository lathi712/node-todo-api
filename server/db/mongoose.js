const mongoose = require('mongoose');
const mlabUrl = "mongodb://root:qwerty@ds159220.mlab.com:59220/todoappnode";
const url = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(mlabUrl || url);

module.exports = {mongoose};
