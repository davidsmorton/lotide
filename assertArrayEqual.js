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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false