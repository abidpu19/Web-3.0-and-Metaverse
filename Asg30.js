/**
 * Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 * Imagine you are writing code that will print a greeting to each user after they log in to a website.
 * Loop through the array, and print a greeting to each user:
 * If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
 * Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 */

let users = ["Admin", "User1", "User2", "User3", "User4"];

for (let i = 0; i < users.length; i++) {
	if (users[i] == "Admin") {
		console.log("----------------------------------");
		console.log(`Hello ${users[i]}, would you like to see a status report?`);
		console.log("-----------------------------");
	} else {
		console.log(`Hello ${users[i]}, thank you for logging in again`);
	}
}
