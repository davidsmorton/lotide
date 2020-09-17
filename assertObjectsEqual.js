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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const firstObjectKeys  = Object.keys(object1);
  const secondObjectKeys = Object.keys(object2);
  if (firstObjectKeys.length !== secondObjectKeys.length) {
    return false;
  }
  //o1 and o2 has same length, which means amount of keys of both o1 and o2 are same
  // that why you only need one loop

  
  for (let key of firstObjectKeys) {
    // check if the two object only contain primitive values
    // if so compare..
    // check if the two objects contain array as values
    // call eqArray() to campare
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !==  object2[key]) {
      return false;
    }
  }
  //Array.isArray(val1) => true && Array.isArray(val2) => false
  //then the whole statement evalute to fasle
  
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    return `💚 💚 💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🚫 🚫 🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false

