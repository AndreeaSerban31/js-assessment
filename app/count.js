exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timeout;
    function startClock(){
      console.log(start++);
      if (start <= end) {
        timeout = setTimeout(startClock, 100);
      }
    }
    startClock();
    return function(timeout) {
      return clearTimeout(timeout);
    };
  }
};
