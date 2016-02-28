/* Bradford Smith (bsmith8)
 * CS 546 Assignment 2 toDoEntries.js
 * 02/28/2016
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
var id = 0;

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
    try {
        var entryToReturn = entries[id];
        if (entryToReturn === undefined || entryToReturn === null)
            throw "Entry was deleted!";
        else
            return entryToReturn;
    }
    catch (e) {
        throw "Entry not found!";
    }
};

//create and store a new ToDoEntry
//return the newly created entry
exports.createEntry = function (author, taskTitle, taskDescription) {
    var newEntry = {};

    newEntry.id = id++;
    newEntry.author = author;
    newEntry.taskTitle = taskTitle;
    newEntry.taskDescription = taskDescription;
    newEntry.taskNotes = [];
    newEntry.status = "open";

    entries[newEntry.id] = newEntry;

    return entries[newEntry.id];
};

//update the ToDoEntry that has the specified id
//return the updated entry
exports.updateEntry = function (id, taskTitle, taskDescription, status) {
    try {
        var entryToUpdate = entries[id];
    }
    catch (e) {
        throw "Entry not found!";
    }

    if (taskTitle !== undefined && taskTitle !== null && taskTitle !== "")
        entryToUpdate.taskTitle = taskTitle;
    if (taskDescription !== undefined && taskDescription !== null && taskDescription !== "")
        entryToUpdate.taskDescription = taskDescription;
    if (status !== undefined && status !== null && status !== "")
        entryToUpdate.status = status;

    return entries[id];
};

//update the ToDoEntry that has the specified by adding notes
//return the updated entry
exports.addNote = function (id, note) {
    try {
        var entryToUpdate = entries[id];
    }
    catch (e) {
        throw "Entry not found!";
    }

    entryToUpdate.taskNotes.push(note);

    return entries[id];
};

//delete the ToDoEntry that has the specified id
exports.deleteEntry = function (id) {
    try {
        delete entries[id];
    }
    catch (e) {
        throw "Entry not found!";
    }
};
