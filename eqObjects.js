const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 💚 💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const firstObjectKeys  = Object.keys(object1);
  const secondObjectKeys = Object.keys(object2);
  if (firstObjectKeys.length !== secondObjectKeys.length){
    return false;
    };
  for (let key of firstObjectKeys) {
    if (object1[key] !==  object2[key]) {
      return false
    }
  }
  return true;
};
const ab = { a: "1", b: "2" }; // first object
const ba = { b: "2", a: "1" }; // second object
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba),true); // => true
console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));
assertEqual(eqObjects(ab, abc), false); // => false


