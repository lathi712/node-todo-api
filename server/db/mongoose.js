const mongoose = require('mongoose');
//const mlabUrl = "mongodb://root:qwerty@ds159220.mlab.com:59220/todoappnode";


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI);

module.exports = {mongoose};
