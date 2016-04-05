/* Bradford Smith (bsmith8)
 * CS 546 Assignment 3 server.js
 * 04/05/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js');

// This package exports the function to create an express instance:
var app = express();

// We can setup Jade now!
app.set('view engine', 'ejs');

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to
// any path starting with /assets;
// it will check the 'static' folder for matching files
app.use('/assets', express.static('static'));

// Setup your routes here!

app.get("/profile", function (request, response) {
    //If the user is not logged in redirect to '/'
    //else show list of First Name, Last Name, Hobby and Pet Name as well as
    //rendering a form to change those
});

app.get("/", function (request, response) {
    // If the user is logged in redirect to '/profile' else render forms to
    // signup or login

    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    response.sendFile("./pages/index.html", { root: __dirname });
});

app.post("/login", function (request, response) {
    //route to post to in order to login
});

app.post("/signup", function (request, response) {
    //route to post to in order to signup
});

app.post("/logout", function (request, response) {
    //Expire the user's auth cookie and wipe the 'currentSessionId' for the
    //currently logged in user then redirect to '/'
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
