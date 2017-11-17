var mongoose = require('mongoose');
var config = require('./../config/configurations');


var dbURI = config.get('mongodb:dbURI');
mongoose.Promise = global.Promise;
mongoose.connect(dbURI);
/**
 * To replace all the console with logger !!
 */
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function() {
       console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose;
