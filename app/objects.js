exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
      return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var privateProperty = [];
    var property;
    for ( property in obj) {
      if (obj.hasOwnProperty(property)) {
        privateProperty.push(property + ': ' + obj[property]);
      }
    }
    return privateProperty;
  }
};
