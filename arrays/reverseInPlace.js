/*
Write a function that takes an array of characters and reverses the letters in place. 
*/

const reverseInPlace = (arr) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    leftIndex++;
    rightIndex--;
  }

  return arr;
};

console.log(reverseInPlace([1, 2, 3, 4, 5]));
