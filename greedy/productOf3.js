/*
Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.

example:
  prodOf3[3, 1, 3, 2, 3] => 27
*/

// CLEANER

const prodOf3 = (nums) => {
  let highest = Math.max(nums[0], nums[1]);
  let lowest = Math.min(nums[0], nums[1]);

  let highestProdOf2 = nums[0] * nums[1];
  let lowestProOf2 = nums[0] * nums[1];

  let hightestProdOf3 = nums[0] * nums[1] * nums[2];

  for (let i = 2; i < nums.length; i++) {
    const current = nums[i];

    hightestProdOf3 = Math.max(
      hightestProdOf3,
      current * highestProdOf2,
      current * lowestProOf2
    );

    highestProdOf2 = Math.max(
      highestProdOf2,
      current * highest,
      current * lowest
    );

    lowestProOf2 = Math.min(lowestProOf2, current * highest, current * lowest);

    highest = Math.max(highest, current);

    lowest = Math.min(lowest, current);
  }

  return hightestProdOf3;
};

console.log(prodOf3([3, 1, 5, 2, 3]));
console.log(prodOf3([3, 1, 3]));
console.log(prodOf3([3, 1, 5, 2, -3]));
console.log(prodOf3([-10, -10, 1, 3, 2]));
console.log(prodOf3([-1, -4, -50, -32, -3, -23]));

// *** DOESN'T WORK WITH CERTAIN NEGATIVES -
// prodOf3([-10, -10, 1, 3, 2]) shoudl return 300, but returns 6

// const prodOf3 = (nums) => {
//   // declare three variables, representing the 3 largest numbers
//   // set them each equal to -Inf
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   let thirdLargest = -Infinity;

//   let smallest = Infinity;
//   let secondSmallest = Infinity;

//   // iterate over the array
//   nums.forEach((num) => {
//     // compare each value to one of the three largest num variables
//     // if the largest is replaced, the previous largest and 2nd becomes the 2nd and 3rd
//     // repeat this logic for the 2nd largest to the 3rd largest
//     // if num is only greater than 3rd largest, just replace it
//     if (num > largest) {
//       thirdLargest = secondLargest;
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest) {
//       thirdLargest = secondLargest;
//       secondLargest = num;
//     } else if (num > thirdLargest) {
//       thirdLargest = num;
//     }

//     if (num < smallest) {
//       secondSmallest = smallest;
//       smallest = num;
//     } else if (num < secondSmallest) {
//       secondSmallest = num;
//     }
//   });

//   const positivesProd = largest * secondLargest * thirdLargest;
//   const negativesProd = secondSmallest * smallest * largest;

//   if (negativesProd > positivesProd) return negativesProd;

//   return positivesProd;
// };

// const mergeSort = (nums) => {
//   if (nums.length <= 1) {
//     return nums;
//   }

//   const middle = Math.floor(nums.length / 2);
//   const left = nums.slice(0, middle);
//   const right = nums.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// };

// const merge = (left, right) => {
//   const result = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }

//   return result.concat(left, right);
// };

// const prodOf3 = (nums) => {
//   const sortedNums = mergeSort(nums);
//   const length = sortedNums.length;

//   const highNumsProduct =
//     sortedNums[length - 1] * sortedNums[length - 2] * sortedNums[length - 3];
//   const twoNegativesProduct =
//     sortedNums[length - 1] * sortedNums[0] * sortedNums[1];

//   if (highNumsProduct < twoNegativesProduct) {
//     return twoNegativesProduct;
//   }

//   return highNumsProduct;
// };
