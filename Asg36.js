/**
 * T-Shirt: Write a function called make_shirt() that accepts a size
 * and the text of a message that should be printed on the shirt.
 * The function should print a sentence summarizing the size of the shirt
 *  and the message printed on it. Call the function.
 */

function make_shirt(size, text) {
	return console.log(
		`The size of shirt is ${size} and text is ${text} being printed on the shirt`
	);
}

make_shirt("small", "Dove");
