/* Bradford Smith (bsmith8)
 * CS 546 Lab 2 server.js
 * 02/14/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js')

// This package exports the function to create an express instance:
var app = express();

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to
// any path starting with /assets;
// it will check the 'static' folder for matching files
app.use('/assets', express.static('static'));

// Setup your routes here!

app.get("/", function (request, response) {
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    response.sendFile("./pages/index.html", { root: __dirname });
});

app.get("/api/perMonthRetirementSavings", function (request, response) {
    var years = request.query["years"];
    var perMonth = request.query["perMonth"];
    var interestRate = request.query["interestRate"];
    var resultNumber = myData.retirementAmountIfSavingPerMonth(years, perMonth, interestRate);
    try {
        response.json({status: "success", result: resultNumber});
    } catch (e) {
        response.status(500).json({status: "error", message: e.message});
    }
});

app.get("/api/investedAmount", function (request, response) {
    var years = request.query["years"];
    var initial = request.query["initial"];
    var interestRate = request.query["interestRate"];
    var resultNumber = myData.investedAmountAfterSomeYears(years, perMonth, interestRate);
    try {
        response.json({status: "success", result: resultNumber});
    } catch (e) {
        response.status(500).json({status: "error", message: e.message});
    }
});

app.get("/apli/loanPayoff", function (request, response) {
    var monthlyAmount = request.query["monthlyAmount"];
    var loanAmount = request.query["loanAmount"];
    var interestRate = request.query["interestRate"];
    var resultNumber = myData.monthsToPayOffLoan(years, perMonth, interestRate);
    try {
        response.json({status: "success", result: resultNumber});
    } catch (e) {
        response.status(500).json({status: "error", message: e.message});
    }
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
