/*
Write a function for doing an in-place shuffle of an array.

The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

 ~~note from Tom - getRandom is pointless to get rando arr indicies
 ~~using Math.floor(Math.random() * arr.length)
*/

const inPlaceShuffle = (arr) => {
  // loop through array
  for (let currIndex = 0; currIndex < arr.lenght; currIndex++) {
    // at each index, perform getRandom method
    const randomIndex = Math.floor(Math.random() * arr.length);

    // don't swap elements at the same index
    if (currIndex !== randomIndex) {
      // swap the value at current loop index with the value at the getRandom index
      [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];
    }
  }

  return arr;
};
