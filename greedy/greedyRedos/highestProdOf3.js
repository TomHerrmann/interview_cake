/*
Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.
*/

const highestProdOf3 = (nums) => {
  if (nums.length < 3) {
    throw new Error('Array must contain 3 integers');
  }

  let highestProdOf3 = nums[0] * nums[1] * nums[2];
  let highestProdOf2 = (lowestProdOf2 = nums[0] * nums[1]);
  let highest = (lowest = nums[0]);

  for (let i = 2; i < nums.length; i++) {
    const currentNum = nums[i];

    if (typeof currentNum !== 'number') {
      throw new Error('Array must contain only integers');
    }

    highestProdOf3 = Math.max(
      highestProdOf3,
      highestProdOf2 * currentNum,
      lowestProdOf2 * currentNum
    );

    highestProdOf2 = Math.max(
      highestProdOf2,
      highest * currentNum,
      lowest * currentNum
    );
    lowestProdOf2 = Math.min(
      lowestProdOf2,
      highest * currentNum,
      lowest * currentNum
    );

    highest = Math.max(highest, currentNum);
    lowest = Math.min(lowest, currentNum);
  }

  return highestProdOf3;
};

console.log(highestProdOf3([1, 2, 3]));
console.log(highestProdOf3([-10, -10, 1, 3, 2]));
