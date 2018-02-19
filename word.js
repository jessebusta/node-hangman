function Word(word) {
  this.word = word;

  this.checkLetter = function(letter, letters) {
    var letterFound = false;
    for (var i = 0; i < this.word.length; i++) {
      if (this.word.charAt(i).toLowerCase() == letter.toLowerCase()) {
        letterFound = true;
        letters[i].changeShown();
      }
    }
    return letterFound;
  }

  this.checkIfSolved = function(letters) {
    var solved = true;
    for (var i = 0; i < this.word.length; i++) {
      if (letters[i].shown == '_') {
        solved = false;
      }
    }
    return solved;
  }
}

module.exports = Word;
