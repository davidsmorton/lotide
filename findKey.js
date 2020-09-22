const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 💚 💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
    
  for (let key in object) {
    
    console.log(object[key]['stars']);
    if (callback(object[key])) {
      return key;
    }
  }
  // the function ends with returing 'undefind'
};

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(result1, "noma");

// notes on this findKeys is only accessing data in the object i.e. {stars: 2} the call back function is taking {stars: 2} and using dot notation to acces the value i.e. 2 and comparing it to the value 2 (given)