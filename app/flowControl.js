exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    // write a function that receives a number as its argument;
    var divThree = ( num%3 === 0 );
    var divFive =  ( num%5 === 0 );

    if(divThree){
      return 'fizz'; /*console.log('fizz');*/
    }
    if(divFive){
      return 'buzz'; /*console.log('buzz');*/
    }
    if (divThree && divThree){
      return 'fizzbuzz'; /*console.log('fizzbuzz');*/
    }
    if ((typeof num) !== 'number') {
      return false; /*console.log(false);*/
    }

    return num; /*console.log(parseInt(num));*/

    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
  }
};
