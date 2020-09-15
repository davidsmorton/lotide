const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    return array[0];
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 💚 💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Test code
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual("two", "two");
//assertEqual("one", "two");
//assertEqual(555, 555);
//assertEqual(555, 556);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));