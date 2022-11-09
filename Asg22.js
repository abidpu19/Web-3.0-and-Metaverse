/**
 * Intentional Error: If you haven’t received an array
 * index error in one of your programs yet, try to make one happen.
 * Change an index in one of your programs to produce an index error.
 * Make sure you correct the error before closing the program.
 */

let arr = ["Iphone", "Laptop", "Electric Kattle"];

for (let i = 0; i <= arr.length; i++) {
  if (arr.indexOf[i] === undefined) {
    arr.indexOf[i] = 5 + i;
  }
  console.log(arr.indexOf[i]);
}
console.log(arr);
console.log(arr.indexOf("Laptop"));

// Array.prototype.move = function (from, to) {
//   this.splice(to, 0, this.splice(from, 1)[0]);
// };
// arr.move(0, 2);
