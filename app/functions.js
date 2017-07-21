exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
      return fn(arr[0],arr[1],arr[2]);
  },

  speak: function(fn, obj) {
     return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(secondArg) {
      var functionString =  str + ', ' + secondArg;
      return functionString;
    };
  },

  makeClosures: function(arr, fn) {
    var stock = [];
    var sqrItem = function(a){
      return function(){ return fn(a);}
    };
    for(var index = 0; index < arr.length; index++ ){
        var sqr = sqrItem(arr[index]);
        stock.push(sqr);
    }
    return stock;
  },

  partial: function(fn, str1, str2) {
  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
