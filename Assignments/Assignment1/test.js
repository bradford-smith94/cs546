/* Bradford Smith (bsmith8)
 * CS 546 Assignment 1 test.js
 * 02/12/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var strModule = require("./string.js"),
    numberModule = require("./numbers.js"),
    objectModule = require("./objects.js"),
    arrayModule = require("./arrays.js"),
    dateModule = require("./dates.js");

console.log("All modules have loaded!");

//result is boolean expression for test pass/fail
//on test fail print given message
var test = function(result, message) {
    if (!result)
        console.log(message);
    return result;
}

//do all the tests for the strings.js module
function testStrings() {
    var passed = 0;
    var total = 0;
    console.log("================================================================================");
    console.log("Testing String module:");
    try {
        strModule.occurencesOfSubstring(null, "hi");
        console.log("[Failed!]: null input");
    } catch (e) {
        passed++;
    }
    total++;
    if (test(0 == strModule.occurencesOfSubstring("", "something"),
                "[Failed!]: finding something in nothing")) {
        passed++;
    }
    total++;
    if (test(2 == strModule.occurencesOfSubstring("foofoofoo", "foofoo"),
                "[Failed!]: 2 overlapping occurences")) {
        passed++;
    }
    total++;

    console.log("String module passed: " + passed + " out of " + total + " tests.");
}

//do all the tests for the numbers.js module
function testNumbers() {
    var passed = 0;
    var total = 0;
    console.log("================================================================================");
    console.log("Testing Numbers module:");
    if (test(25 == numberModule.triangleArea(5, 10),
                "[Failed!]: area of triangle")) {
        passed++;
    }
    total++;
    try {
        numberModule.triangleArea(-1, -5);
        console.log("[Failed!]: negative inputs");
    } catch (e) {
        passed++;
    }
    total++;

    console.log("Numbers module passed: " + passed + " out of " + total + " tests.");
}

//do all the tests for the objects.js module
function testObjects() {
    var passed = 0;
    var total = 0;
    console.log("================================================================================");
    console.log("Testing Object module:");

    try {
        objectModule.shallowClone(null);
        console.log("[Failed!]: shallowClone null");
    } catch (e) {
        passed++;
    }
    total++;
    try {
        objectModule.deepClone(null);
        console.log("[Failed!]: deepClone null");
    } catch (e) {
        passed++;
    }
    total++;

    console.log("Object module passed: " + passed + " out of " + total + " tests.");
}

//do all the tests for the arrays.js module
function testArrays() {
    var passed = 0;
    var total = 0;
    console.log("================================================================================");
    console.log("Testing Arrays module:");
    try {
        arrayModule.shallowClone(null);
        console.log("[Failed!]: shallowClone null");
    } catch (e) {
        passed++;
    }
    total++;
    try {
        arrayModule.randomized(null);
        console.log("[Failed!]: randomized null");
    } catch (e) {
        passed++;
    }
    total++;
    if (test(["1", "2", "3", "4"].toString() === arrayModule.shallowClone(["1", "2", "3", "4"]).toString(),
                "[Failed!]: shallowClone")) {
        passed++;
    }
    total++;
    if (test(["1", "2", "3", "4"].toString() !== arrayModule.randomized(["1", "2", "3", "4"]).toString(),
                "[Failed!]: randomized\n\t *note* there is a random chance that this is a false positive")) {
        passed++;
    }
    total++;

    console.log("Arrays module passed: " + passed + " out of " + total + " tests.");
}

//do all the tests for the dates.js module
function testDates() {
    var passed = 0;
    var total = 0;
    console.log("================================================================================");
    console.log("Testing Dates module:");
    try {
        dateModule.daysUntil(null);
        console.log("[Failed!]: days until null");
    } catch (e) {
        passed++;
    }
    total++;
    try {
        dateModule.daysUntil(new Date(1990, 0, 1));
        console.log("[Failed!]: days until past");
    } catch (e) {
        passed++;
    }
    total++;
    if (test(0 == dateModule.daysUntil(new Date()),
                "[Failed!]: days until today")) {
        passed++;
    }
    total++;
    try {
        dateModule.daysSince(null);
        console.log("[Failed!]: days since null");
    } catch (e) {
        passed++;
    }
    total++;
    try {
        dateModule.daysSince(new Date(2266, 0, 1));
        console.log("[Failed!]: days since future");
    } catch (e) {
        passed++;
    }
    total++;

    console.log("Dates module passed: " + passed + " out of " + total + " tests.");
}

//run tests
testStrings();
testNumbers();
testObjects();
testArrays();
testDates();
