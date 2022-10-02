const output = document.getElementById("output");

const famous_person = "Albert Einstein";
const message = `Saying of  
  ${famous_person} 
  " The true sign of intelligence is not knowledge but imagination."`;
const p = document.createElement("p");
const text = document.createTextNode(message);
p.appendChild(text);
p.style.fontSize = "18px";
output.appendChild(p);
console.log(message);
