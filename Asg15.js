/**
 * Changing Guest List: You just heard that one of your guests can’t make the dinner,
 *  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 *  Start with your program from Exercise 14. Add a print statement at the end of your
 * program stating the name of the guest who can’t make it.
 * Modify your list, replacing the name of the guest who can’t make it with the name
 * of the new person you are inviting.
 * Print a second set of invitation messages, one for each person who is still in your list.
 */

const names = ["Nawaz Nazir", "Rehman Ali", "Kamran Ahmed"];
let notcoming = names[1];
names.splice(1, 1, "Shabir Ahmed");

for (let i = 0; i < names.length; i++) {
  console.log(
    "Mr " +
      names[i] +
      " please join us on (29 Oct 2022) as we plan to arrange a delicious dinner party. We'll be sharing good foods and some good moments together! We want to celebrate this night with some good food and good people. It'd be really appreciated if you could join us"
  );
}
console.log(notcoming + " is not joins");
