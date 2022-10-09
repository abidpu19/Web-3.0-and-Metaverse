const result = document.getElementById("result");

let name = prompt("Please Enter you name: ");

alert(`Hello ${name}, would you like to learn some Python today?`);
console.log(`Hello ${name}, would you like to learn some Python today?`);
result.innerHTML = `Hello ${name}, would you like to learn some Python today?`;
