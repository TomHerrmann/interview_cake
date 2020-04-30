/*
Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.

example:
  prodOf3[3, 1, 3, 2, 3] => 27
*/

const prodOf3 = (nums) => {
  // declare three variables, representing the 3 largest numbers
  // set them each equal to -Inf
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  // iterate over the array
  nums.forEach((num) => {
    // compare each value to one of the three largest num variables
    // if the largest is replaced, the previous largest and 2nd becomes the 2nd and 3rd
    // repeat this logic for the 2nd largest to the 3rd largest
    // if num is only greater than 3rd largest, just replace it
    if (num > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = num;
    } else if (num > thirdLargest) {
      thirdLargest = num;
    }

    console.log(num);
    console.log(largest);
    console.log(secondLargest);
    console.log(thirdLargest);
  });

  console.log(largest, secondLargest, thirdLargest);

  // return the product of the top three values
  return largest * secondLargest * thirdLargest;
};

console.log(prodOf3([3, 1, 5, 2, 3]));
console.log(prodOf3([3, 1, 3]));
console.log(prodOf3([3, 1, 5, 2, -3]));
