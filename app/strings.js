exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var countNoOccurance = 0;
      var stock = '';
      for ( var index = 0; index < str.length; index++) {
        if ( str[index] === str[index+1] ) {
          countNoOccurance++;
          if (countNoOccurance < amount) {
            stock += str[index];
          }
        } else {
          countNoOccurance = 0;
          stock += str[index];
        }
      };
      return stock;


  },

  wordWrap: function(str, cols) {
    var newString = '';
    var wordsArray = [];

    wordsArray = str.split(' ');
    newString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
      if (wordsArray[i].length > cols) {
        newString += '\n' + wordsArray[i];
      } else {
        if (newString.length + wordsArray[i].length > cols) {
          newString += '\n' + wordsArray[i];
        } else {
          newString += ' ' + wordsArray[i];
        }
      }
    }
    return newString;
  },

  reverseString: function(str) {
  }
};
