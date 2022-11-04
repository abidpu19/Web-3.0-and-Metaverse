/**
 * They think of something you could store in a JavaScript Object.
 * Write a program that creates Objects containing these items.
 */

let list = [];

function storeSomeThing(item) {
  list.push(item);
  return console.log(list);
}

storeSomeThing("Abid");
storeSomeThing("Kamran");
