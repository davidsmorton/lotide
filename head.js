const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    return array[0];
  }
};

module.exports = head;
module.exports = assertEqual;

//console.log(head(['5'])); used to check test code



