/**
 * Adding Comments: Choose two of the programs you’ve written,
 * and add at least one comment to each. If you don’t have
 * anything specific to write because your programs are too
 * simple at this point, just add your name and the current
 * date at the top of each program file. Then write one sentence describing what the program does.
 */
/**
 * Auhton : Abid Hussain
 * Date   : 23 Oct 2022
 * Version : 1.0.0
 */
//Following code of lines are being used to display string in Uppercase, Lowercase and titlecase

//Take an input from user
var Persname = prompt("What is Your Name?");
//Printing the display name in To Lower, upper, Normal
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
