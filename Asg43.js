/**
 * Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 *  with a copy of the array of magicians’ names. Because the original array will be unchanged,
 * return the new array and store it in a separate array. Call show_magicians()
 *  with each array to show that you have one array of the original names and
 * one array with the Great added to each magician’s name.
 */
let magician_names = [
	"David Copperfield",
	"David Blaine",
	"Shin Lim",
	"Derren Brown",
	"Dynamo",
	"Juan Tamariz",
];

function show_magicians(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

//Make the change

function make_great(arr) {
	let new_arr = [];
	for (let i = 0; i < arr.length; i++) {
		new_arr[i] = `The Great ${arr[i]}`;
	}
	return new_arr;
}

let arrout = make_great(magician_names);
console.log("---Unchanged magicians’ names list------- ");
show_magicians(magician_names);
console.log("---Change Array with The Great word with magicians’ names----");
show_magicians(arrout);
