

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
      

 
module.exports = middle;