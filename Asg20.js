/**
 * Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
 * or anything else you’d like. Write a program that creates a list containing these items.
 */

let list = [];

function storeNames(item) {
  list.push(item);
  return console.log(list);
}
storeNames("Indus River");
storeNames("K-2");
storeNames("Ireland");
