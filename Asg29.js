/**
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
 * if statements that check for certain fruits in your array.
 *  Make a array of your three favorite fruits and call it favorite_fruits.
 *  Write five if statements. Each should check whether a certain kind of fruit is in your array.
 *  If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */
let fruits = ["Apple", "Mango", "Kiwi", "Banana", "Cherry"];

console.log(fruits);
if (fruits.includes("Apple")) {
	console.log("Apple is found in your fruits list");
}
if (fruits.includes("Mango")) {
	console.log("Mango is found in your fruits list");
}
if (fruits.includes("Kiwi")) {
	console.log("Kiwi is found in your fruits list");
}
if (fruits.includes("Banana")) {
	console.log("Banana is found in your fruits list");
}
if (fruits.includes("Cherry")) {
	console.log("Cherry is found in your fruits list");
}
console.log("------------------------------------------------\n");

let favorite_fruits = ["Apple", "Mango", "Kiwi"];

let fruitinput = "Apple";
if (favorite_fruits.includes(fruitinput)) {
	console.log("You really like bananas " + fruitinput);
}

fruitinput = "Mango";
if (favorite_fruits.includes(fruitinput)) {
	console.log("You really like bananas " + fruitinput);
}

fruitinput = "Kiwi";
if (favorite_fruits.includes(fruitinput)) {
	console.log("You really like bananas " + fruitinput);
}

fruitinput = "Lemon";
if (favorite_fruits.includes(fruitinput)) {
	console.log("You really like bananas " + fruitinput);
}
fruitinput = "Watermelon";
if (favorite_fruits.includes(fruitinput)) {
	console.log("You really like bananas " + fruitinput);
}
