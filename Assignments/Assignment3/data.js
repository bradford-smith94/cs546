/* Bradford Smith (bsmith8)
 * CS 546 Assignment 3 data.js
 * 04/05/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var MongoClient = require('mongodb').MongoClient,
 settings = require('./config.js'),
 Guid = require('guid'),
 bcrypt = require('bcrypt-nodejs');

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

        exports.createUser = function(username, hash) {
            //make sure to check for duplicate username, and existence of
            //password
        };

        exports.editProfile = function() {
        };

        exports.getUserBySessionId = function(sessionId) {
        };

        exports.getUserByCredentials = function(username, password) {
            user = ""; //get from Mongo
            bcrypt.compare(password, user.encryptedPassword, function(err, res) {
                if (res === true) {
                    console.log("Successful login for user: " + username);
                } else {
                    console.log("Unsuccessful login attempt for user: " + username);
                }
            });
        };

    });
