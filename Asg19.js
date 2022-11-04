/**
 * Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 *  print a message indicating the number of people you are inviting to dinner.
 */
Array.prototype.append = function (item) {
  this.push(item);
};

const names = ["Nawaz Nazir", "Rehman Ali", "Kamran Ahmed"];
names.unshift("Ali Raza");
names.splice(2, 0, "Shabir Ahmed");
names.append("Gul Nawaz");

//printing the number of guests
console.log("Total Guests: " + names.length + " Join the dinner");
