const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 💚 💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("two", "two");
assertEqual("one", "two");
assertEqual(555, 555);
assertEqual(555, 556);
