const quote = document.getElementById("quote");
const paragraph = document.createElement("p");
const brtag = document.createElement("br");

const saying = [
  {
    name: "Albert Einstein",
    qoute:
      "We cannot solve our problems with the same thinking we used when we created them",
  },
  {
    name: "Albert Einstein",
    qoute: "The true sign of intelligence is not knowledge but imagination",
  },
  {
    name: "Albert Einstein",
    qoute: "I have no special talent. I am only passionately curious",
  },
  {
    name: "Albert Einstein",
    qoute:
      "The only reason for time is so that everything doesn't happen at once",
  },
];

const textnode = document.createTextNode(
  `${saying[0].name} once said, “${saying[0].qoute}.”`
);

paragraph.appendChild(textnode);

quote.appendChild(paragraph);
for (let i = 0; i < saying.length; i++) {
  console.log(`${saying[i].name} once said, “${saying[i].qoute}.”`);
}
