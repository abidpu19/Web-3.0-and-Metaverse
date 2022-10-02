const quote = document.getElementById("quote");

const saying = [
  {
    name: "Albert Einstein",
    qoute:
      "We cannot solve our problems with the same thinking we used when we created them.",
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
var ret = " ";
for (let i = 0; i < saying.length; i++) {
  ret = `${saying[i].name} once said, “${saying[i].qoute}.” `;

  console.log(`${saying[i].name} once said, “${saying[i].qoute}.”`);
}
quote.innerHTML = ret;
