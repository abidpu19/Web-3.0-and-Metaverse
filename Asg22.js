/**
 * Intentional Error: If you haven’t received an array
 * index error in one of your programs yet, try to make one happen.
 * Change an index in one of your programs to produce an index error.
 * Make sure you correct the error before closing the program.
 */

let arr = ["Iphone", "Laptop", "Electric Kattle"];

// Array.prototype.move = function (from, to) {
//   this.splice(to, 0, this.splice(from, 1)[0]);
// };
// arr.move(0, 2);
console.log(arr);
console.log(arr.indexOf("Laptop"));
console.log(arr.splice(4, 1));
