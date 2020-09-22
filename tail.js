const assertEqual = require("./assertEqual");

const tail = function(array) {

  if (array.length > 1) {
    let newArray = array.slice(1);
    return newArray;
  } else {
    return [];
  }

};


module.exports = tail;
//module.exports = assertEqual;


// result = tail(["Hello"]);
// console.log(result);
// result = tail([]);
// console.log(result);


