/* Bradford Smith (bsmith8)
 * CS 546 Assignment 3 data.js
 * 04/05/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var MongoClient = require('mongodb').MongoClient,
 settings = require('./config.js'),
 Guid = require('guid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
var exports = module.exports = {};

//user object
/*
 * {
 *      _id: unique id string,
 *      username: string,
 *      encryptedPassword: a hash,
 *      currentSessionId: unique id string,
 *      profile: {
 *          firstName: string,
 *          lastName: string,
 *          hobby: string,
 *          petName: string
 *      }
 * }
 */

MongoClient.connect(fullMongoUrl)
    .then(function(db) {
        var myCollection = db.collection("users");

        exports.createUser = function() {
        };

        exports.editProfile = function() {
        };

        exports.getUserBySessionId = function(sessionId) {
        };

        exports.getUserByCredentials = function(username, password) {
        };

    });
