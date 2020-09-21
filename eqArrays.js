
// First check length if differnt return "false"
// Use a loop to compare elements of each array tricky..
// two separt loops calling on the same index of each array and comparing the value of each element at that index...
// write a function for each and check the results of the function

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



module.exports = eqArrays;