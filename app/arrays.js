exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
     return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    for(var i = 0; i <= arr.length-1; i++){
      sum = sum + arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
     for(var index = arr.length-1; index >= 0; index--){
       if( arr[index] === item){
        arr.splice(index,1);
       }
     }
     return arr
  },

  removeWithoutCopy: function(arr, item) {
    for ( var i = 0; i < arr.length; i += 1) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(-1,1);
    return arr;
  },

  prepend: function(arr,item ) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index,0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = [] ;
    for(var index = 0; index <= arr.length-1; index++){
      if(arr[index] === item){
        count.push(arr[index]);
      }
    }
    return count.length;
  },

  duplicates: function(arr) {
    var duplicates = [];
    for( var index = 0; index < arr.length; index++ ){
        if (arr.indexOf(arr[index],index+1) > -1 ){
            if((duplicates.indexOf(arr[index]) === -1)){
                 duplicates.push(arr[index]);
            }
        }
    }
    return duplicates;
    },

  square: function(arr) {
    var stock = [];
      for( var index = 0; index < arr.length; index++ ){
         sqrt = Math.pow(arr[index],2);
         stock.push(sqrt);
      }
      return stock;
  },
  findAllOccurrences: function(arr, target) {
    var occurrences = [];
    for ( var index = 0; index < arr.length; index++ ) {
      if (arr[index] === target) {
        occurrences.push(index);
      }
    }
     return occurrences;
  }
};
