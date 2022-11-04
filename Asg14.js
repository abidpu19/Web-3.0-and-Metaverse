/**
 * Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 * Make a list that includes at least three people you’d like to invite to dinner.
 * Then use your list to print a message to each person, inviting them to dinner.
 */
const names = ["Nawaz Nazir", "Rehman Ali", "Kamran Ahmed"];

for (let i = 0; i < names.length; i++) {
  console.log(
    "Mr " +
      names[i] +
      " please join us on (29 Oct 2022) as we plan to arrange a delicious dinner party. We'll be sharing good foods and some good moments together! We want to celebrate this night with some good food and good people. It'd be really appreciated if you could join us"
  );
}
