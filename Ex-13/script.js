const names = ["Nawaz Nazir", "Rehman Ali", "Kamran Ahmed"];

//remove guest from last of the list and store in variable
const notcoming = names.pop();
// Adding new guest in the list
names.push("Waseem Khan");
//printing the invitation
for (let i = 0; i < names.length; i++) {
  console.log(
    "Mr " +
      names[i] +
      " please join us on (29 Oct 2022) as we plan to arrange a delicious dinner party. We'll be sharing good foods and some good moments together! We want to celebrate this night with some good food and good people. It'd be really appreciated if you could join us"
  );
}

console.log(notcoming + " can’t make the dinner");
