// Bollean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = 'blue';
// Array
var list = [1, 2, 3];
var genericArray = [1, 2, 3];
// Tuple
var x;
// Initialize it
// x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// Void
function warnUser() {
    console.log("This is my warning message");
}
// Null and undefined
var u = undefined;
var n = null;
// Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
var otherValue = "this is a string";
var otherStrLength = otherValue.length;
