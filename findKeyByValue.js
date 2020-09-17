const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 💚 💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value){
  let array = Object.keys(object); 
    for (letkey of array) {
      if (object[key] === value) {
        return key;
      }
    }
    // the function ends with returing 'undefind'
  };

  // for (let i = 0; i < array.length; i++) {
      // let element = array[i];

  //}

// array = [sci_fi, comedy, drama];

// object[key] 
//bestTVShowsByGenre['sci_fi'] = ?
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

