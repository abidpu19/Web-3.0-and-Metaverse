/**
 * Author : Abid Hussain
 * version: 1.0.0
 * Date : 10 Oct 2022
 * Simple Input Output Program
 */

// Getting Elements by their Ids of HTML page for processing
const result = document.getElementById("result");
const p = document.createElement("p");
const br = document.createElement("br");

// Doing simple Math on two numbers and store a value in a variable
let addition = 6 + 2;
let subtraction = 10 - 2;
let multiplication = 4 * 2;
let division = 16 / 2;

// Creating an element in HTML document and assign value to be output
const add = document.createTextNode(`Addition of Two number : ${addition}`);
const sub = document.createTextNode(
  `Subtraction of Two number : ${subtraction} `
);
const mul = document.createTextNode(
  `Multiplication of Two number : ${multiplication} `
);
const divs = document.createTextNode(
  `Multiplication of Two number : ${multiplication} `
);
// Substitute Values in Paragraph
p.append(add, br);
p.appendChild(sub, br);
p.appendChild(mul, br);
p.appendChild(divs, br);
//Subsitute paragraph in div element of HTML Page
result.appendChild(p);

// Print out to console
console.log(`${addition}`);
console.log(`${subtraction} `);
console.log(`${multiplication} `);
console.log(`${multiplication} `);
