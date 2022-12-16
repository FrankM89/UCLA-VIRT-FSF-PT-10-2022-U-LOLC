const Letter = require("./Letter");

class Word {
  constructor( word) {
    this.letters = word.split(" ").map(char => new Letter(char));
  }
}

module.exports = Word;
