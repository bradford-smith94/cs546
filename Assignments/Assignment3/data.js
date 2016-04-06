/* Bradford Smith (bsmith8)
 * CS 546 Assignment 3 data.js
 * 04/06/2016
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
        db.createCollection("users");
        var userCollection = db.collection("users");

        //create a user and add them to the database
        exports.createUser = function(username, password, firstName, lastName, hobby, petName) {
            //make sure to check for duplicate username, and existence of
            //password
            if (!username || username === "")
                return Promise.reject("You must provide a username!");
            if (!password || password === "")
                return Promise.reject("You must provide a password!");
            if (!firstName || firstName === "")
                return Promise.reject("You must provide a first name!");
            if (!lastName || lastName === "")
                return Promise.reject("You must provide a last name!");
            if (!hobby || hobby === "")
                return Promise.reject("You must provide a hobby!");
            if (!petName || petName === "")
                return Promise.reject("You must provide a pet name!");

            //create the profile object
            var p = {
                firstName: firstName,
                lastName: lastName,
                hobby: hobby,
                petName: petName
            }

            //hash the password and get rid of it
            hash = bcrypt.hashSync(password);
            password = undefined;

            //make sure that username has not been taken before inserting a user
            return exports.checkUsernameIsTaken(username).then(function(res) {
                console.log("Requested username already exists");
                return Promise.reject("A user with that username already exists!");
            }, function(errorMessage) {
                console.log("Requested username available");
                return userCollection.insertOne({_id: Guid.create().toString(), username: username, encryptedPassword: hash, currentSessionId: Guid.create().toString(), profile: p }).then(function(newUser) {
                    return exports.getUserById(newUser.insertedId);
                });
            });

        };

        //update a user's profile
        exports.editProfile = function(id, firstName, lastName, hobby, petName) {
            if (!id || id === "")
                return Promise.reject("You must provide a id!");
            if (!firstName || firstName === "")
                return Promise.reject("You must provide a first name!");
            if (!lastName || lastName === "")
                return Promise.reject("You must provide a last name!");
            if (!hobby || hobby === "")
                return Promise.reject("You must provide a hobby!");
            if (!petName || petName === "")
                return Promise.reject("You must provide a pet name!");

            //create the profile object
            var p = {
                firstName: firstName,
                lastName: lastName,
                hobby: hobby,
                petName: petName
            }

            return userCollection.updateOne({ _id: id }, { profile: p }).then(function() {
                return exports.getUserById(id);
            });
        };

        //return if the username is taken, else error
        exports.checkUsernameIsTaken = function(username) {
            if (!username || username === "")
                return Promise.reject("You must provide a username!");

            return userCollection.find({ username: username }).limit(1).toArray().then(function(listOfUsers) {
                if (listOfUsers.length === 0)
                    throw "Username " + username + " is not taken";

                return true;
            });
        };

        //try to get a user by id
        exports.getUserById = function(id) {
            if (!id)
                return Promise.reject("You must provide an id!");

            return userCollection.find({ _id: id }).limit(1).toArray().then(function(listOfUsers) {
                if (listOfUsers.length === 0)
                    throw "Could not find user with id " + id;

                return listOfUsers[0];
            });
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
            return userCollection.find({ username: username }).limit(1).toArray().then(function(listOfUsers) {
                if (listOfUsers.length === 0)
                    throw "Unsuccessful login attempt for user: " + username;

                bcrypt.compare(password, listOfUsers[0].encryptedPassword, function(err, res) {
                    if (res === true) {
                        console.log("Successful login for user: " + username);
                        return listOfUsers[0];
                    } else {
                        throw "Unsuccessful login attempt for user: " + username;
                    }
                });
            });
        };

    });
