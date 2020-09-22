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
    return `💚 💚 💚 Assertion Passed: ${array1} === ${array2}`;
    
  } else {
    return `🚫 🚫 🚫 Assertion Failed: ${array1} !== ${array2}`;
  }

};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // console.log("array: ", array);
  // console.log("callback: ", callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
   
    // console.log('item BEFORE:' , item)
    // console.log('item AFTER:' , callback(item));
    // console.log('---');
  }
  return results;
};

const results1 = map(words, word => word[0]);
// console.log(results1);
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));