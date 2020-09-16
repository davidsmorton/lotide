
// First check length if differnt return "false"
// Use a loop to compare elements of each array tricky..
// two separt loops calling on the same index of each array and comparing the value of each element at that index...
// write a function for each and check the results of the function

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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 💚 💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false