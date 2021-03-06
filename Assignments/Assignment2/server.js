/* Bradford Smith (bsmith8)
 * CS 546 Assignment 2 server.js
 * 02/28/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var todo = require('./toDoEntries.js');

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

app.get("/home", function (request, response) {
    response.render("pages/home", { pageTitle: "Welcome Home" });
});

app.get("/api/todo", function (request, response) {
    response.json(todo.getEntries());
});

app.get("/api/todo/open", function (request, response) {
    response.json(todo.getOpenEntries());
});

app.get("/api/todo/completed", function (request, response) {
    response.json(todo.getCompletedEntries());
});

app.get("/api/todo/:id", function (request, response) {
    try {
        response.json(todo.getEntryById(request.params.id));
    }
    catch (e) {
        response.status(404).json({error: "An entry with the ID of {" + request.params.id + "} could not be found"});
    }
});

app.post("/api/todo", function (request, response) {
    var author = request.body.author;
    var title = request.body.taskTitle;
    var descrip = request.body.taskDescription;

    if ((author === undefined || author === null || author === "") ||
            (title === undefined || title === null || title === "") ||
            (descrip === undefined || descrip === null || descrip === "")) {
        response.status(500).json({error: "You must provide valid information in the request body to create an entry."});
    }
    else {
        try {
            response.json(todo.createEntry(author, title, descrip));
        }
        catch (e) {
            response.status(404).json({error: "An entry with the ID of {" + request.params.id + "} could not be found"});
        }
    }
});

app.put("/api/todo/:id", function (request, response) {
    var title = request.body.taskTitle;
    var descrip = request.body.taskDescription;
    var status =  request.body.status;

    if (((title === undefined || title === null || title === "") &&
                (descrip === undefined || descrip === null || descrip === "") &&
                (status === undefined || status === null || status === "")) ||
            (status !== "open" && status !== "completed")) {
        response.status(500).json({error: "You must provide valid information in the request body to create an entry."});
    }
    else {
        try {
            response.json(todo.updateEntry(request.params.id, title, descrip, status));
        }
        catch (e) {
            response.status(404).json({error: "An entry with the ID of {" + request.params.id + "} could not be found"});
        }
    }
});

app.post("/api/todo/:id/notes", function (request, response) {
    var note = request.body.note;
    if (note === undefined || note === null || note === "")
        response.status(500).json({error: "You must provide valid information in the request body to create an entry."});
    else {
        try {
            response.json(todo.addNote(request.params.id, note));
        }
        catch (e) {
            response.status(404).json({error: "An entry with the ID of {" + request.params.id + "} could not be found"});
        }
    }
});

app.delete("/api/todo/:id", function (request, response) {
    try {
        todo.deleteEntry(request.params.id);
        response.json({success: true});
    }
    catch (e) {
        response.status(404).json({error: "An entry with the ID of {" + request.params.id + "} could not be found"});
    }
});

app.get("/", function (request, response) {
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    response.sendFile("./pages/index.html", { root: __dirname });
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
