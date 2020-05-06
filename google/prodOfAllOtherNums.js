/*
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Here's the catch: You can't use division in your solution!
*/

// QUADRATIC TIME IS BAD
// const getProductsOfAllIntsExceptAtIndex = (nums) => {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         product *= nums[j];
//       }
//     }
//     result.push(product);
//   }
//   return result;
// };

const getProductsOfAllIntsExceptAtIndex = (nums) => {
  const products = [];

  let prodSoFar = 1;
  for (let i = 0; i < nums.length; i++) {
    products[i] = prodSoFar;
    prodSoFar *= nums[i];
  }

  prodSoFar = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] *= prodSoFar;
    prodSoFar *= nums[i];
  }

  return products;
};

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
