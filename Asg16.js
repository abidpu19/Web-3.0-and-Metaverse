/**
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 */

const names = ["Nawaz Nazir", "Rehman Ali", "Kamran Ahmed"];
//append function
Array.prototype.append = function (item) {
  this.push(item);
};

names.unshift("Ali Raza");
names.splice(2, 0, "Shabir Ahmed");
names.append("Gul Nawaz");

for (let i = 0; i < names.length; i++) {
  console.log(
    "Mr " +
      names[i] +
      " please join us on (29 Oct 2022) as we plan to arrange a delicious dinner party. We'll be sharing good foods and some good moments together! We want to celebrate this night with some good food and good people. It'd be really appreciated if you could join us"
  );
}
console.log(" found a bigger dinner table");

console.log("----------------------------------------------");
