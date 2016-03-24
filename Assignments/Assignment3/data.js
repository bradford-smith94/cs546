/* Bradford Smith (bsmith8)
 * CS 546 Assignment 3 data.js
 * 03/24/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var MongoClient = require('mongodb').MongoClient,
 settings = require('./config.js'),
 Guid = require('guid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
var exports = module.exports = {};

MongoClient.connect(fullMongoUrl)
    .then(function(db) {
        var myCollection = db.collection("COLLECTION_NAME");

        // setup your exports!
    });
