/**
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 * which prints the name of each magician in the array.
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
show_magicians(magician_names);
