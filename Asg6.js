/**
 * Stripping Names: Store a person’s name, and include some whitespace characters
 * at the beginning and end of the name. Make sure you use each character combination,
 * "\t" and "\n", at least once. Print the name once,
 *  so the whitespace around the name is displayed. Then print the name after striping the white spaces.
 */

var PersName = "\t Kamran \n";
var stripingName = PersName.trim();
console.log("Name with Whitespace at beginning" + PersName + "New Line at end");
console.log(
  "---------------------Name after striping the white spaces ---------------"
);
console.log(stripingName);
