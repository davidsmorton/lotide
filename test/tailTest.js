

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.lengthOf(tail(["Hello", "Lighthouse", "Labs"]), 2);
  });

  it("returns '['Lighthouse']' for [0]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse"); 
    // assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
  }); 

  it("returns 'Labs' for [1]", () => {
   assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs"); 
  }); 
  
  it("returns 3 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.lengthOf(["Hello", "Lighthouse", "Labs"], 3);
  });

 
});

// let result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements



// assertEqual(result[1], "Labs"); // ensure second element is "Labs"