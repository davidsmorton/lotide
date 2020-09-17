let eqArrays = function(array1, array2) {
  //check if arrays are the same length
  if (array1.length !== array2.length) {
    return false;
  }
  //check if array elements match in each array
  for (let i = 0; i < array1.length; i++) {
    //console.log(array1[i] !== array2[i]);
    if (array1[i] !== array2[i]) {
      return false;
    }
    
  }
  return true;
};

let assertArraysEqual = function(array1, array2) {
  //check if arrays are the same length
  if (eqArrays(array1, array2)) {
    return "These match";
    
  } else {
    return "These dont match";
  }

};

let letterPositions = function (someString) {
  const results = {};
  

  for (let i = 0; i < someString.length; i++){
    console.log([i]);
      if (results[someString[i]]) {
        results[someString[i]].push(i) 
       } else {
         results[someString[i]] = [i];
       
         } 
 }
 delete results[" "];
 return results;
}
console.log(assertArraysEqual(letterPositions("Hello"), { H: [ 0 ], e: [1], l:[2,3], O: [5]}));

