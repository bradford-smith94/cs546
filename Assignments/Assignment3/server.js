/* Bradford Smith (bsmith8)
 * CS 546 Assignment 3 server.js
 * 04/06/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var myData = require('./data.js');

// This package exports the function to create an express instance:
var app = express();

// We can setup Jade now!
app.set('view engine', 'ejs');

// Middlewares: ================================================================

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to
// any path starting with /assets;
// it will check the 'static' folder for matching files
app.use('/assets', express.static('static'));

// check if the user is logged in and update that in response.locals.user
app.use(function(request, response, next) {
    if (request.cookies.sessionId) {
        console.log("User has sessionId cookie");
        user = myData.getUserBySessionId(request.cookies.sessionId);
        if (user) { //match means user is authenticated
            response.locals.user = user;
        } else{ //user is not authenticated, expire the cookie
            response.locals.user = undefined;

            var anHourAgo = new Date();
            anHourAgo.setHours(anHourAgo.getHours() -1);

            response.cookie("sessionId", "", { expires: anHourAgo });
            response.clearCookie("sessionId");
        }
    } else {
        console.log("User does not have sessionId cookie");
        response.locals.user = undefined;
    }

    next();
});

// Routes: =====================================================================

app.get("/profile", function (request, response) {
    //If the user is not logged in redirect to '/'
    //else show list of First Name, Last Name, Hobby and Pet Name as well as
    //rendering a form to change those
    //TODO:
    if (!response.locals.user)
        response.redirect("/");
    u = response.locals.user
    response.render('pages/profile.ejs', { pageTitle: u.username,
                                            firstName: u.profile.firstName,
                                            lastName: u.profile.lastName,
                                            hobby: u.profile.hobby,
                                            petName: u.profile.petName});
});

app.get("/", function (request, response) {
    // If the user is logged in redirect to '/profile' else render forms to
    // signup or login

    if (response.locals.user) //if we have a user then they must be logged in
        response.redirect("/profile");

    response.render('pages/home.ejs', { pageTitle: "Home" });
});

//route to post to in order to login
app.post("/login", function (request, response) {
    username = request.body.username;
    password = request.body.password;

    console.log("Login attempt for: " + username);

    //this handles error checking of username and password
    myData.getUserByCredentials(username, password).then(function(user) {
        response.locals.user = user;
        response.redirect("/profile");
    }, function(errorMessage) {
        //TODO:
        console.log("Login error");
        response.redirect("/");
    });
});

//route to post to in order to signup
app.post("/signup", function (request, response) {
    username = request.body.username;
    password = request.body.password;
    //TODO:
});

//route to post to in order to update user's profile
app.post("/updateProfile", function (request, response) {
    firstName = request.body.firstName;
    lastName = request.body.lastName;
    hobby = request.body.hobby;
    petName = request.body.petName;

    //TODO:
});

//route to post to in order to logout current user
app.post("/logout", function (request, response) {
    //Expire the user's auth cookie and wipe the 'currentSessionId' for the
    //currently logged in user then redirect to '/'

    if (response.locals.user) {
        var anHourAgo = new Date();
        anHourAgo.setHours(anHourAgo.getHours() -1);

        response.cookie("sessionId", "", { expires: anHourAgo });
        response.clearCookie("sessionId");

        //TODO: wipe currentSessionId in db
    }

    response.redirect("/");
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
