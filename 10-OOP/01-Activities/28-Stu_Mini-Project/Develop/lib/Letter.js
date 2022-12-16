class Letter {
  constructor(character) {
    this.character = character;
    this.visible = !/a-z1-9/i.test(character);
  }

  toString() {
    if(this.visible === true) {
        return this.character
    }
    return "_"
  }

  guess(charGuess.toUpperCase)
}

module.exports = Letter;
