/* Bradford Smith (bsmith8)
 * CS 546 Assignment 1 numbers.js
 * 02/09/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var m = {};

//return the area of a triangle
m.triangleArea = function (base, height) {
    return .5 * base * height;
}

//return the perimeter of the triangle given the 3 sides
m.perimeterOfTriangle = function (side1, side2, side3) {
    return side1 + side2 + side3;
}

//return the area of a square given the length of a side
m.areaOfSquare = function (side) {
    return side * side;
}

//return the perimeter of a square given one side
m.perimeterOfSquare = function (side) {
    return 4 * side;
}

//return the volume of a cube given one side
m.areaOfCube = function (side) {
    return side * side * side;
}

//return the surface area of a cube given one side
m.surfaceAreaOfCube = function (side) {
    return 6 * side * side;
}

//return the perimeter of a cube given one side
m.perimeterOfCube = function (side) {
    return 12 * side;
}

//return the circumference of a circle given the radius
m.circumferenceOfCircle = function (radius) {
    return Math.PI * radius * 2;
}

//return the area of a circle given the radius
m.areaOfCircle = function (radius) {
    return Math.PI * radius * radius;
}

module.exports = m;
