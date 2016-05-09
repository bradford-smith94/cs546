/* Bradford Smith (bsmith8)
 * CS 546 Assignment 4 server.js
 * 05/08/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var movieData = require('./data.js');

// We create our express isntance:
var app = express();

app.use(bodyParser.json()); // for parsing application/json

// setup to use ejs
app.set('view engine', 'ejs');

app.use('/assets', express.static('static'));

// If you'll notice, there's not a single database call in the server file!

app.get("/", function(request, response) {
    // Get all the movies
    movieData.getAllMovies().then(function(movieList) {
        // render the main page
        response.render('pages/index.ejs', { movies: movieList });
    });
});

// Get all the movies
app.get("/api/movies/all", function(request, response) {
    movieData.getAllMovies().then(function(movieList) {
        response.json(movieList);
    });
});

// Get the best movies
app.get("/api/movies/best", function(request, response) {
    movieData.getPopularMovies().then(function(popularMovies){
        response.json(popularMovies);
    });
});

// Get a single movie
app.get("/api/movies/:id", function(request, response) {
    movieData.getMovie(request.params.id).then(function(movie) {
        response.json(movie);
    }, function(errorMessage) {
        response.status(500).json({ error: errorMessage });
    });
});

// Create a movie
app.post("/api/movies", function(request, response) {
    movieData.createMovie(request.body.title, request.body.rating).then(function(movie) {
        response.json(movie);
    }, function(errorMessage) {
        response.status(500).json({ error: errorMessage });
    });
});

// Update a movie
app.put("/api/movies/:id", function(request, response) {
    movieData.updateMovie(request.params.id, request.body.title, request.body.rating).then(function(movie) {
        response.json(movie);
    }, function(errorMessage) {
        response.status(500).json({ error: errorMessage });
    });
});

// Delete a movie
app.delete("/api/movies/:id", function(request, response) {
    movieData.deleteMovie(request.params.id).then(function(status) {
        response.json({success: status});
    }, function(errorMessage) {
        response.status(500).json({ error: errorMessage });
    });
});

// We can now navigate to localhost:3000
app.listen(3000, function() {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
