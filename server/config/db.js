const mongoose = require("mongoose");

const connection = mongoose.connect('mongodb://localhost/mean_9pm');
module.exports = connection;
