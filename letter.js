function Letter(letter) {
  this.letter = letter;
  this.shown = '_';
  //returns the character to be printed to the console
  this.printLetter = function() {
    return this.shown;
  }
  //changes the temporary character being shown to the actual letter
  this.changeShown = function() {
    this.shown = letter;
  }
}

module.exports = Letter;
