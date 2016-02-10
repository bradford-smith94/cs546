/* Bradford Smith (bsmith8)
 * CS 546 Assignment 1 numbers.js
 * 02/10/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var m = {};

//return the area of a triangle
m.triangleArea = function (base, height) {
    if (base < 0 || height < 0) //lengths cannot be negative
        throw "Invalid Input Error: " + base + ", " + height;

    return .5 * base * height;
}

//return the perimeter of the triangle given the 3 sides
m.perimeterOfTriangle = function (side1, side2, side3) {
    if (side1 < 0 || side2 < 0 || side3 < 0) //lengths cannot be negative
        throw "Invalid Input Error: " + side1 + ", " + side1 + ", " + side3;

    if ((side1 + side2 > side3) &&
            (side1 + side3 > side2) &&
            (side2 + side3 >  side1)) //must be a valid triangle
        return side1 + side2 + side3;
    else
        throw "Invalid Triangle Error: " + side1 + ", " + side2 + ", " + side3;
}

//return the area of a square given the length of a side
m.areaOfSquare = function (side) {
    if (side < 0) //lengths cannot be negative
        throw "Invalid Input Error: " + side;

    return side * side;
}

//return the perimeter of a square given one side
m.perimeterOfSquare = function (side) {
    if (side < 0) //lengths cannot be negative
        throw "Invalid Input Error: " + side;

    return 4 * side;
}

//return the volume of a cube given one side
m.areaOfCube = function (side) {
    if (side < 0) //lengths cannot be negative
        throw "Invalid Input Error: " + side;

    return side * side * side;
}

//return the surface area of a cube given one side
m.surfaceAreaOfCube = function (side) {
    if (side < 0) //lengths cannot be negative
        throw "Invalid Input Error: " + side;

    return 6 * side * side;
}

//return the perimeter of a cube given one side
m.perimeterOfCube = function (side) {
    if (side < 0) //lengths cannot be negative
        throw "Invalid Input Error: " + side;

    return 12 * side;
}

//return the circumference of a circle given the radius
m.circumferenceOfCircle = function (radius) {
    if (radius < 0) //lengths cannot be negative
        throw "Invalid Input Error: " + radius;

    return Math.PI * radius * 2;
}

//return the area of a circle given the radius
m.areaOfCircle = function (radius) {
    if (radius < 0) //lengths cannot be negative
        throw "Invalid Input Error: " + radius;

    return Math.PI * radius * radius;
}

module.exports = m;
