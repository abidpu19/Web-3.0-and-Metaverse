const result = document.getElementById("result");
const upcase = document.getElementById("upcase");
const lowcase = document.getElementById("lowcase");
const titlcase = document.getElementById("titlcase");

let name = prompt("Please Enter you name: ");

alert(
  `${
    name.toUpperCase() +
    " " +
    name.toLowerCase() +
    " " +
    name.charAt(0).toUpperCase() +
    name.substr(1).toLowerCase()
  }`
);
console.log(
  `${
    name.toUpperCase() +
    " " +
    name.toLowerCase() +
    " " +
    name.charAt(0).toUpperCase() +
    name.substr(1).toLowerCase()
  }`
);
result.innerHTML = `Hello ${name},`;
upcase.innerHTML = `Name in UpperCase: ${name.toUpperCase()}`;
lowcase.innerHTML = `Name in LowerCase: ${name.toLowerCase()}`;
titlcase.innerHTML = `Name in TitleCase: ${
  name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()
}`;
