/* Bradford Smith (bsmith8)
 * CS 546 Assignment 1 string.js
 * 02/13/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var m = {};

//count and return how many times a substring occurs in a main string
m.occurencesOfSubstring = function (main, substr) {
    if (typeof main !== 'string' && !(main instanceof String) ||
            typeof substr !== 'string' && !(substr instanceof String))
        throw "Input Not of Type String: " + main + ", " + substr;

    var count = 0;
    var index = 0;
    while (main.includes(substr, index)) {
        index = main.indexOf(substr, index) + 1;
        count++;
    }
    return count;
}

//count and return how many times a substring occurs in a main string
//(Case insensitive)
m.occurencesOfSubstringInsensitive = function (main, substr) {
    if (typeof main !== 'string' && !(main instanceof String) ||
            typeof substr !== 'string' && !(substr instanceof String))
        throw "Input Not of Type String: " + main + ", " + substr;

    return m.occurencesOfSubstring(main.toLowerCase(), substr.toLowerCase());
}

//given a string representing a paragraph, reorder the sentences
m.randomizeSentences = function (paragraph) {
    if (typeof paragraph !== 'string' && !(paragraph instanceof String))
        throw "Input Not of Type String: " + paragraph;

    var retParagraph = "";
    var i;
    var j = 0;
    var sentences = [];

    for (i = 0; i < paragraph.length; i++) {
        if (paragraph[i] === '.' || paragraph[i] === '?' || paragraph[i] === '!') {
            sentences.push(paragraph.slice(j, i + 1).trim());
            j = i + 1;
        }
    }

    for (i = sentences.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));

        retParagraph = retParagraph.concat(" ");
        retParagraph = retParagraph.concat(sentences.splice(j, 1));
    }

    return retParagraph;
}

module.exports = m;
