/**
 * Animals: Think of at least three different animals that have a common characteristic.
 * Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
 * Modify your program to print a statement about each animal, such as A dog would make a great pet.
 * Add a line at the end of your program stating what these animals have in common.
 * You could print a sentence such as Any of these animals would make a great pet!
 */
let animals = ["cat", "dog", "lion"];

for (let i = 0; i < animals.length; i++) {
	if (animals[i].toLocaleLowerCase() === "dog") {
		console.log(`${animals[i]} is great pet.`);
	} else if (animals[i].toLocaleLowerCase() === "cat") {
		console.log(`${animals[i]} is alse likely a good.`);
	} else if (animals[i].toLocaleLowerCase() === "lion") {
		console.log(`${animals[i]} is a wild animal.`);
	}
}
console.log("These animals having following characteristic in common ");
console.log("Eat, Sleep, Walk");
