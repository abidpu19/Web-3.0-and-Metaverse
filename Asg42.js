/**
 * Great Magicians: Start with a copy of your program from Exercise 39.
 * Write a function called make_great() that modifies the array of magicians
 *  by adding the phrase the Great to each magician’s name. Call show_magicians()
 * to see that the list has actually been modified.
 */

let magician_names = [
	"David Copperfield",
	"David Blaine",
	"Shin Lim",
	"Derren Brown",
	"Dynamo",
	"Juan Tamariz",
];

console.log(magician_names);

function show_magicians(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function make_great(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = `The Great ${arr[i]}`;
	}
}

//Function Calling
make_great(magician_names);
console.log(
	"---------------------------Print the modified Array-------------------------"
);
show_magicians(magician_names);
