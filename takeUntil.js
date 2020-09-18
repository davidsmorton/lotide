let eqArrays = function(array1, array2) {
  //check if arrays are the same length
  if (array1.length !== array2.length) {
    return false;
  }
  //check if array elements match in each array
  for (let i = 0; i < array1.length; i++) {
    //console.log(array1[i] !== array2[i]);
    if (array1[i] !== array2[i]) {
      return false;
    }
    
  }
  return true;
};

let assertArraysEqual = function(array1, array2) {
  //check if arrays are the same length
  if (eqArrays(array1, array2)) {
    return `💚 💚 💚 Assertion Passed: ${array1} === ${array2}`;;
    
  } else {
    return `🚫 🚫 🚫 Assertion Failed: ${array1} !== ${array2}`;;
  }

};

const takeUntil = function(array, callback) {
    // console.log("array: ", array);
    //console.log("callback: ", callback);
    let results = []
    for (let item of array) {
      if (callback(item)) {
        return results;
      } else {
        results.push(item);
      }
    }
    return results; 
      // console.log('item BEFORE:' , item)
      // console.log('item AFTER:' , callback(item));
      // console.log('---');
    }
    
  // ...
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
//Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]