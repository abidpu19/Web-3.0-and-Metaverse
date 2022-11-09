/**
 * City Names: Write a function called city_country() that takes in the name of a city and its country.
 *  The function should return a string formatted like this:"Lahore, Pakistan"
 * Call your function with at least three city-country pairs, and print the value that’s returned.
 */
function city_country(city, country) {
	console.log(`"${titleCase(city)}, ${titleCase(country)}"`);
}

function titleCase(str) {
	str = str.toLowerCase().split(" ");
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(" ");
}
city_country("karachi", "pakistan");
city_country("faislabad", "pakistan");
city_country("mainwali", "pakistan");
city_country("london", "uk");
