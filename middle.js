let assertArraysEqual = function(array1, array2) {
  //check if arrays are the same length
  if (array1.length !== array2.length) {
    return "These arrays dont' match, different lengths";
  }
  //check if array elements match in each array
  for (let i = 0; i < array1.length; i++) {
    //console.log(array1[i] !== array2[i]);
    if (array1[i] !== array2[i]) {
      return "These arrays dont' match, different values";
    }
    
  }
  return "These Arrays match";
};

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

//What is the length of the array
// is it even or odd?
// if even
// divide array.lenght by 2

const middle = function(array) {
  let middle = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middle.push(array[(array.length / 2 - 1)]);
      middle.push(array[(array.length / 2)]);
    } else {
      middle.push(array[Math.floor(array.length / 2)]);
    }
  }
  return middle;
};
      
console.log(assertArraysEqual(middle([1,2,3,4]), [2, 3]));
      