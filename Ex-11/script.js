// Your Own Array: Think of your favorite mode of transportation,
//such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items,
//  such as “I would like to own a Honda motorcycle

const mode_of_tpt = ["Honda MC", "Honda Civic", "Toyota GLI"];
for (let i = 0; i < mode_of_tpt.length; i++) {
  console.log("I would like to own a " + mode_of_tpt[i]);
  console.log("I would like to ride a " + mode_of_tpt[i]);
  console.log("I would like to buy a " + mode_of_tpt[i]);
}
