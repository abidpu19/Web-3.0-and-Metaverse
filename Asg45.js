/**
 * Cars: Write a function that stores information about a car in a Object.
 *  The function should always receive a manufacturer and a model name.
 * It should then accept an arbitrary number of keyword arguments.
 *  Call the function with the required information and two other name-value pairs,
 *  such as a color or an optional feature. Print the Object that’s returned
 * to make sure all the information was stored correctly.
 */

function vehicle_info(
	manufacturer,
	model,
	color = "black",
	...optional_feature
) {
	// var args = arguments;
	let arr = [];
	// for (var a in args) {
	// 	arr.push(args[a]); //{ artist: artist_name, ablum: album_title, tracks: tracks }
	// }
	console.log(`${manufacturer} model ${model} color ${color} `);
	arr.push({
		manufacturer: manufacturer,
		model: model,
		color: color,
		...optional_feature,
	});
	console.log(arr);
}

vehicle_info("Toyota", 2022, "Red");
vehicle_info("Honda", 2021, "Black");
vehicle_info("Honda", 2021, "Black", "accidental");
