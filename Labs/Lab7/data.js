/* Bradford Smith (bsmith8)
 * CS 546 Lab 7 data.js
 * 03/21/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var MongoClient = require('mongodb').MongoClient,
    settings = require('./config.js'),
    Guid = require('guid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
var exports = module.exports = {};

MongoClient.connect(fullMongoUrl)
    .then(function(db) {
        var myCollection = db.collection("comments");

        // setup your body
        exports.createComment = function(comment) {
            // you may return Promise.reject("error message"); if there is an error, such as a comment not being provided;
            // this will result in a rejected promise immediately being returned
            if (!comment || comment === "")
                return Promise.reject("You must provide a comment!");

            // return a promise that resolves the new comment
            return myCollection.insertOne({ _id: Guid.create().toString(), comment: comment }).then(function(newDoc) {
                return newDoc.insertedId;
            });
        };

        exports.getAllComments = function() {
            // return a promise that resolves to all the comments in your collection.
            return myCollection.find().toArray();
        }
    });
