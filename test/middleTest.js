
// const assertArraysEqual = require("../assertArraysEqual");

// console.log(assertArraysEqual(middle([1,2,3,4]), [2, 3]));

const assert = require('chai').assert;
const middle = require("../middle");

describe('#tail', () => {
  it("returns [2, 3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2, 3]);
  });
});

