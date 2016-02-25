/* Bradford Smith (bsmith8)
 * CS 546 Assignment 2 toDoEntries.js
 * 02/25/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

//for storing and manipulating ToDoEntries
/* example entry
 * {
 *      id: NUMBER, //the ID number of the entry
 *      author: STRING, //a string representing the author of the task
 *      taskTitle: STRING, //a title for the task; (summary)
 *      taskDescription: STRING, //a more detailed explanation
 *      taskNotes: STRING[], //notes about the task used for conversation
 *      status: STRING //open or completed
 * }
 */

var exports = module.exports = {};

//object to hold `ID: ToDoEntry` pairs
var entries = {};
var id = 1;

//return an array listing all ToDoEntries currently stored in memory
exports.getEntries = function () {
    var ret = [];

    for (key in entries) {
        ret.push(entries[key]);
    }

    return ret;
};

//return an array listing every ToDoEntry that has status "open"
exports.getOpenEntries = function () {
    var ret = [];

    for (key in entries) {
        if (entries[key].status === "open")
            ret.push(entries[key]);
    }

    return ret;
};

//return an array listing every ToDoEntry that has status "completed"
exports.getCompletedEntries = function () {
    var ret = [];

    for (key in entries) {
        if (entries[key].status === "completed")
            ret.push(entries[key]);
    }

    return ret;
};

//return a single ToDoEntry that has the specified id
exports.getEntryById = function (id) {
    return entry[id];
};

//create and store a new ToDoEntry
exports.createEntry = function (author, taskTitle, taskDescription) {
};

//update the ToDoEntry that has the specified id
exports.updateEntry = function (id, author, taskTitle, taskDescription) {
};

//update the ToDoEntry that has the specified by adding notes
exports.addNotes = function (id, notes) {
};

//delete the ToDoEntry that has the specified id
exports.deleteEntry = function (id) {
};
