/* Bradford Smith (bsmith8)
 * CS 546 Lab 8 logger.js
 * 03/30/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var MongoClient = require('mongodb').MongoClient,
    settings = require('./config.js'),
    Guid = require('guid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
var exports = module.exports = {};

MongoClient.connect(fullMongoUrl)
    .then(function(db) {
        var logCollection = db.collection("logs");

        // return a promist that retrieves all log entries as an array
        exports.getAllLogs = function() {
            return logCollection.find().toArray();
        };

        // store a new log entry
        exports.createLog = function(path, method, cookies) {
            if (!path || path === "")
                return Promise.reject("You must provide a path");
            if (!method || method === "")
                return Promise.reject("You must provide a method");
            if (!cookies)
                cookies = {};

            return logCollection.insertOne({ _id: Guid.create().toString(),
                requestPath: path, requestMethod: method, cookies: cookies,
                timestamp: (new Date()).toString() }).then(function(newDoc) {
                return newDoc.insertedId;
            });
        };
    });
