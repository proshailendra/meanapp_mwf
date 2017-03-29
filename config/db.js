const mongoose = require("mongoose");

const connection = mongoose.connect('mongodb://heroku_n084k8ls:povnvr2q7m6m4k8n8q3jd63f8t@ds111940.mlab.com:11940/heroku_n084k8ls');
module.exports = connection;
