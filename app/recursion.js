exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
   var objSize = 0;
/*    console.log( objSize );
    function iterate(data, dirName) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) {
          if (typeof data[property] == "object" ) {
            iterate(data[property], dirName + '.' + property);
          } else {
            console.log(property + "   " + data[property]);
          }
        }
      }
    }
    iterate(data, dirName )*/
  },

  permute: function(arr) {
    var results = [];

    function permute(arr, usedCh) {
      var permCh = [];
      var usedCh = usedCh || [];

      for (var i = 0; i < arr.length; i++) {
        permCh = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(usedCh.concat(permCh));
        }
        permute(arr.slice(), usedCh.concat(permCh));
        arr.splice(i, 0, permCh[0]);
      }

      return results;
    }

    return permute(arr);
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
