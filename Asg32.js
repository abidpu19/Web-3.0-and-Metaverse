/**
 * Checking Usernames: Do the following to create a program that simulates how websites
 * ensure that everyone has a unique username.
 * Make a list of five or more usernames called current_users.
 * Make another list of five usernames called new_users. Make sure one or two
 * of the new usernames are also in the current_users list.
 * Loop through the new_users list to see if each new username has already been used.
 * If it has, print a message that the person will need to enter a new username.
 * If a username has not been used, print a message saying that the username is available.
 * Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */
let current_users = ["Admin", "User1", "User2", "user3", "User4"];
let new_users = ["Rhman", "Ali", "Nisar", "User3", "User4"];

current_users = current_users.map((element) => {
	return element.toLocaleLowerCase();
});
new_users = new_users.map((element) => {
	return element.toLocaleLowerCase();
});

for (let j = 0; j < new_users.length; j++) {
	if (current_users.includes(new_users[j])) {
		console.log(`${new_users[j]} already taken please enter a new username`);
	} else if (!current_users.includes(new_users[j])) {
		console.log(`${new_users[j]} is available`);
	}
}
