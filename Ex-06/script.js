const result = document.getElementById("result");
const p = document.createElement("p");
const br = document.createElement("br");

let addition = 6 + 2;
let subtraction = 10 - 2;
let multiplication = 4 * 2;
let division = 16 / 2;

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
p.append(add, br);
p.appendChild(sub, br);
p.appendChild(mul, br);
p.appendChild(divs, br);
result.appendChild(p);

console.log(`${addition}`);
console.log(`${subtraction} `);
console.log(`${multiplication} `);
console.log(`${multiplication} `);
