/*
Write a function for doing an in-place ↴ shuffle of an array.

The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.
*/

const getRandom = (ceil, floor) => {
  return Math.floor(Math.random() * ceil - floor + 1 + floor);
};

const inPlaceShuffle = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const random = getRandom(arr.length - 1, i);

    if (random !== i) {
      [arr[i], arr[random]] = [arr[random], arr[i]];
    }
  }

  return arr;
};
