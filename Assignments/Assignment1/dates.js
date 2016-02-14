/* Bradford Smith (bsmith8)
 * CS 546 Assignment 1 dates.js
 * 02/13/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var m = {};

//return the number of days between the current date and someDate
m.daysUntil = function (someDate) {
    if (!(someDate instanceof Date))
        throw "Input not of Type Date";

    var today = new Date();
    if ((someDate.getTime() - today.getTime()) < 0)
        throw "Date is in the past";

    var day = 24*60*60*1000; //hours*minutes*seconds*milliseconds
    return Math.round((someDate.getTime() - today.getTime()) / day);
}

//return the number of days left in the year
m.daysLeftInYear = function () {
    var today = new Date();
    var endOfYear = new Date(today.getFullYear() + 1, 0, 1); //january 1st next year
    var day = 24*60*60*1000; //hours*minutes*seconds*milliseconds

    return Math.round((endOfYear.getTime() - today.getTime()) / day);
}

//return the number of days that have passed since someDate
m.daysSince = function (someDate) {
    if (!(someDate instanceof Date))
        throw "Input not of Type Date";

    var today = new Date();
    if ((today.getTime() - someDate.getTime()) < 0)
        throw "Date is in the future";

    var day = 24*60*60*1000; //hours*minutes*seconds*milliseconds
    return Math.round((today.getTime() - someDate.getTime()) / day);
}

//return the next date that is both a Friday and the 13th
m.nextFridayTheThirteenth = function () {
    var date = new Date();
    var friday = 5; //sunday is 0

    do {
        date.setDate(date.getDate() + 1);
    } while (date.getDay() != friday || date.getDate() != 13);

    //zero out time
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date;
}

module.exports = m;
