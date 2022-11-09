/**
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 *  If you want to try more comparisons, write more tests.
 *  Have at least one True and one False result for each of the following:
 *  Tests for equality and inequality with strings
 *  Tests using the lower case function
 *  Numerical tests involving equality and inequality, greater than and less than,
 *  greater than or equal to, and less than or equal to
 *  Tests using "and" and "or" operators
 *  Test whether an item is in a array
 *  Test whether an item is not in a array
 */
let vehicle = "Car";
console.log("Is vehicle == 'Motorbike' ? I predict True.");
console.log(vehicle == "Motorbike");
vehicle = "Car";
console.log("Is vehicle == 'Car' ? I predict True.");
console.log(vehicle == "Car");
vehicle = "Car";
console.log("Is vehicle == 'Car' ? I predict True.");
console.log(vehicle.toLocaleLowerCase == "Car");
let a, b;
a = 10;
b = 20;
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
if (a < b || b > a) {
  console.log("b is greater than a");
}
if (a < b || (b > a && a < b)) {
  console.log("a is less than b");
}

let arr = [1, 3, 4, 6];

//element in Array
if (arr.includes(1)) {
  console.log("1 is in array");
}
//element in not in Array
if (!arr.includes(0)) {
  console.log("0 is not in array");
}
