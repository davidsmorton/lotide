const eqArrays = require("./eqArrays");


let assertArraysEqual = function(array1, array2) {
  //check if arrays are the same length
  if (eqArrays(array1, array2)) {
    return `💚 💚 💚 Assertion Passed: ${array1} === ${array2}`;
    
  } else {
    return `🚫 🚫 🚫 Assertion Failed: ${array1} !== ${array2}`;
  }

};

module.exports = assertArraysEqual;