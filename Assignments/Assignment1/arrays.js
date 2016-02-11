/* Bradford Smith (bsmith8)
 * CS 546 Assignment 1 arrays.js
 * 02/11/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var m = {};

//given a base array, return a shallow copy of that array
m.shallowClone = function (baseArr) {
    if (!(baseArr instanceof Array))
        throw ("Invalid Array");

    var retArr = [];
    for (var i = 0, end = baseArr.length; i < end; i++) {
        retArr[i] = baseArr[i];
    }

    return retArr;
}

//given a base array, return a shallow copy of the array with the elements in a
//  randomized order
m.randomized = function (baseArr) {
    if (!(baseArr instanceof Array))
        throw ("Invalid Array");

    var retArr = m.shallowClone(baseArr);

    var i, j, temp;
    //loop backward through array
    for (i = retArr.length - 1; i > 0; i--) {
        //get a random other index
        j = Math.floor(Math.random() * (i + 1));

        //swap
        temp = retArr[i];
        retArr[i] = retArr[j];
        retArr[j] = temp;
    }

    return retArr;
}

module.exports = m;
