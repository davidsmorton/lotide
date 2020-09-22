// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`💚 💚 💚 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

let countLetters = function(someString) {
  const results = {};
  const x = someString.split(" ").join("");

  for (let letter of x) {
    //console.log(letter);
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
 
  }
  return results;
};
console.log(countLetters("lighthouse in the house"));

/*const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }


  return results;
};*/