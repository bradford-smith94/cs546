/* Bradford Smith (bsmith8)
 * CS 546 Assignment 1 test.js
 * 02/13/2016
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
    if (test(1 == strModule.occurencesOfSubstring("fooFoofoo", "Foofoo"),
            "[Failed!]: case sensitive")) {
        passed++;
    }
    total++;
    try {
        strModule.occurencesOfSubstringInsensitive(null, null);
        console.log("[Failed!]: null inputs");
    } catch (e) {
        passed++;
    }
    total++;
    if (test(2 == strModule.occurencesOfSubstringInsensitive("fooFoofoo", "Foofoo"),
                "[Failed!]: 2 overlapping occurences")) {
        passed++;
    }
    total++;
    try {
        strModule.randomizeSentences(null);
        console.log("[Failed!]: randomize null");
    } catch (e) {
        passed++;
    }
    total++;
    var p = "Hello, world! My name is Phil. This is a wonderful day because the snow did not delay me. The class was very sad that class was still, right? Of course they were.";
    if (test(p !== strModule.randomizeSentences(p),
                "[Failed!]: randomize sentences")) {
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
    try {
        numberModule.triangleArea(-1, -5);
        console.log("[Failed!]: negative inputs");
    } catch (e) {
        passed++;
    }
    total++;
    if (test(25 == numberModule.triangleArea(5, 10),
                "[Failed!]: area of triangle")) {
        passed++;
    }
    total++;
    try {
        numberModule.perimeterOfTriangle(1, 2, 7);
        console.log("[Failed!]: invalid triangle");
    } catch (e) {
        passed++;
    }
    total++;
    if (test(12 == numberModule.perimeterOfTriangle(3, 4, 5),
                "[Failed!]: perimeter of a triangle")) {
        passed++;
    }
    total++;
    if (test(0 == numberModule.areaOfSquare(0),
                "[Failed!]: area of a square")) {
        passed++;
    }
    total++;
    if (test(4 == numberModule.perimeterOfSquare(1),
                "[Failed!]: perimeter of a square")) {
        passed++;
    }
    total++;
    if (test(8 == numberModule.areaOfCube(2),
                "[Failed!]: area (volume) of a cube")) {
        passed++;
    }
    total++;
    if (test(24 == numberModule.surfaceAreaOfCube(2),
                "[Failed!]: surface area of a cube")) {
        passed++;
    }
    total++;
    if (test(60 == numberModule.perimeterOfCube(5),
                "[Failed!]: perimeter of cube")) {
        passed++;
    }
    total++;
    if (test(Math.PI * 2 == numberModule.circumferenceOfCircle(1),
                "[Failed!]: circumference of circle")) {
        passed++;
    }
    total++;
    if (test(Math.PI == numberModule.areaOfCircle(1),
                "[Failed!]: area of circle")) {
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

    var tempObj = {
        hello: "world",
        subObj: {
            other: "thing"
        }
    };
    var retObj;

    if (test(tempObj !== (retObj = objectModule.shallowClone(tempObj)),
                "[Failed!]: shallow clone")) {
        if (retObj.subObj === tempObj.subObj)
            passed++;
        else
            console.log("[Failed!]: shallow clone");
    }
    total++;
    if (test(tempObj !== (retObj = objectModule.deepClone(tempObj)),
                "[Failed!]: deep clone")) {
        if (retObj.subObj !== tempObj.subObj)
            passed++;
        else
            console.log("[Failed!]: deep clone");
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
    if (test(["1", "2", "3", "4"].toString() === arrayModule.shallowClone(["1", "2", "3", "4"]).toString(),
                "[Failed!]: shallowClone")) {
        passed++;
    }
    total++;
    if (test(["1", ["2", "3"], "4"].toString() === arrayModule.shallowClone(["1", ["2", "3"], "4"]).toString(),
                "[Failed!]: shallow clone with sub arrays")) {
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
    if (test(322 == dateModule.daysLeftInYear(),
                "[Failed!]: days left in the year\n\t*note* this test is date sensitive")) {
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

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (test(1 == dateModule.daysSince(yesterday),
                "[Failed!]: days since yesterday")) {
        passed++;
    }
    total++;

    if (test(new Date(2016, 4, 13).getTime() === dateModule.nextFridayTheThirteenth().getTime(),
                "[Failed!]: next friday the thirteenth\n\t*note* this test is date sensitive")) {
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
