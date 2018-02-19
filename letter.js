function Letter(letter) {
  this.letter = letter;
  this.shown = '_';

  this.printLetter = function() {
    return this.shown;
  }

  this.changeShown = function() {
    this.shown = letter;
  }
}

module.exports = Letter;
