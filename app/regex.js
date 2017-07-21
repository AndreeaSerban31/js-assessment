exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
       var regex = /\d/;
       if (str.match(regex)){
         return true;
       }else{
         return false;
       }
  },

  containsRepeatingLetter: function(str) {
    var regex = /([a-zA-Z]).*?\1/;
    if (str.match(regex)){
      return true;
    }else{
      return false;
    }
  },

  endsWithVowel: function(str) {
    var regex = /[aeiou]$/i;
    if (str.match(regex)){
      return true;
    }else{
      return false;
    }
  },

  captureThreeNumbers: function(str) {
    var regex = /[0-9]{3}/;
    var result = regex.exec(str);
    if (result){
        return result[0];
    }else{
      return false;
    }
  },

  matchesPattern: function(str) {
    var regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    var result = str.match(regex);
    if (result){
      return true;
    }else{
      return false;
    }
  },

  isUSD: function(str) {
  }
};
