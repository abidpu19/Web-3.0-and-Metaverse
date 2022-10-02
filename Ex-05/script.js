const nameoutput = document.getElementById("nameoutput");
const textnod = document.createElement("p");
const fullname = `Abid Hussain\t`;

const text = document.createTextNode(fullname);
textnod.appendChild(text);
textnod.style.textDecorationColor = "red";
nameoutput.appendChild(textnod);

console.log("Name with Space: " + fullname);
console.log("Name without space: " + fullname.trim());
