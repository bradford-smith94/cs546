/* Bradford Smith (bsmith8)
 * CS 546 Assignment 1 objects.js
 * 02/11/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var m = {};

//return a 'shallow clone' of the baseObject
//  objects inside baseObject are just copied, (1 layer deep)
m.shallowClone = function (baseObject) {
    if (baseObject === null || typeof(baseObject) !== 'object')
        throw "Invalid Object";

    var retObj = {};

    for (var key in baseObject) {
        retObj[key] = baseObject.key;
    }

    return retObj;
}

//return a 'deep clone' of the baseObject
//  each object that is encountered nested in baseObject is also deeply cloned
m.deepClone = function (baseObject) {
    if (baseObject === null || typeof(baseObject) !== 'object')
        throw "Invalid Object";

    var retObj = {};

    for (var key in baseObject) {
        if (typeof(key) === 'object')
            retObj[key] = m.deepClone(key);
        else
            retObj[key] = baseObject.key;
    }

    return retObj;
}

module.exports = m;
