/**
 * Name Cases: Store a person’s name in a variable,
 * and then print that person’s name in lowercase, uppercase, and titlecase
 */

var Persname = prompt("What is Your Name?");
alert(
  Persname.toLowerCase() +
    " " +
    Persname.toUpperCase() +
    " " +
    Persname.charAt(0).toUpperCase() +
    Persname.substr(1).toLowerCase()
);
var lowercase = Persname.toLowerCase();
var uppercase = Persname.toUpperCase();
var propercase =
  Persname.charAt(0).toUpperCase() + Persname.substr(1).toLowerCase();

console.log(lowercase + " " + uppercase + " " + propercase);
