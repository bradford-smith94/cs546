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
        var userCollection = db.collection("users");

        //create a user and add them to the database
        exports.createUser = function(username, hash) {
            //make sure to check for duplicate username, and existence of
            //password
            if (!username || username === "")
                return Promise.reject("You must provide a username!");
            if (!hash || hash === "")
                return Promise.reject("You must provide a password!");

            return userCollection.insertOne({_id: Guid.create().toString(), username: username, encryptedPassword: hash, currentSessionId: Guid.create().toString(), profile: {} }).then(function(newUser) {
                return newUser.insertedId;
            });
        };

        //update a user's profile
        exports.editProfile = function(username, firstName, lastName, hobby, petName) {
        };

        //try to get a user by sessionId
        exports.getUserBySessionId = function(sessionId) {
            if (!sessionId)
                return Promise.reject("You must provide a sessionId!");

            return userCollection.find({currentSessionId: sessionId }).limit(1).toArray().then(function(listOfUsers) {
                if (listOfUsers.length === 0)
                    throw "Could not find user with currentSessionId " + sessionId;

                return listOfUsers[0];
            });
        };

        //try to get a user by username and password only if the password
        //matches
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
