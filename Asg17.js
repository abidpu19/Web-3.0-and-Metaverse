/**
 * Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

 */
Array.prototype.append = function (item) {
  this.push(item);
};

const names = ["Nawaz Nazir", "Rehman Ali", "Kamran Ahmed"];
names.unshift("Ali Raza");
names.splice(2, 0, "Shabir Ahmed");
names.append("Gul Nawaz");
console.log(
  "Sorrry dinner table wont arrive in time for the dinner we only invite two people for dinner"
);

for (let i = 0; i < names.length - 2; i++) {
  console.log(
    "Mr " + names[i] + " Sorry dinner for the (29 Oct 2022) not held"
  );
  names.splice(0, names.length - 2);
}

console.log(names);
for (let i = 0; i < names.length; i++) {
  console.log(
    "Mr " + names[i] + " Please join the event held on (29 Oct 2022)"
  );
  names.splice(0, names.length);
}

console.log(names);
