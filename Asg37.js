/**
 * Large Shirts: Modify the make_shirt() function so that shirts are large
 *  by default with a message that reads I love JavaScript. Make a large shirt
 *  and a medium shirt with the default message, and a shirt of any size with a different message
 */
function make_shirt(size = "large", text = "not") {
	let message = "";
	if (
		size === "large" ||
		size === "medium" ||
		size === "" ||
		size === null ||
		undefined
	) {
		message = `I Love JavaScript`;
	} else {
		message = `The size of shirt is ${size} and text is ${text} being printed on the shirt`;
	}
	return console.log(message.toString());
}

make_shirt(null, "not");
