/*
First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:

  const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.
*/

import { get } from 'http';

const stockPrices = [10, 7, 5, 8, 11, 9];

// const getMaxProfit = (stockArr) => {
//   // declare profit variable, initialize at 0
//   let maxProfit = -Infinity;

//   // iterate over the array and update buy and sell object data
//   // use nested loop to test for the largest price difference between buy and sell
//   for (let buyIndex = 0; buyIndex < stockArr.length; buyIndex++) {
//     for (
//       let sellIndex = buyIndex + 1;
//       sellIndex < stockArr.length;
//       sellIndex++
//     ) {
//       const potentialProfit = stockArr[sellIndex] - stockArr[buyIndex];
//       console.log(potentialProfit);
//       if (potentialProfit > maxProfit) {
//         maxProfit = potentialProfit;
//       }
//     }
//   }

//   return maxProfit;
// };

const getMaxProfit = (stockArr) => {
  if (!Array.isArray(stockArr))
    throw new Error('Input must be an array of at least 2 prices');
  if (stockArr < 2)
    throw new Error('Getting a profit requires at least 2 prices');
  if (stockArr === 2) return stockArr[1] - stockArr[0];

  let maxProfit = stockArr[1] - stockArr[0];
  let minPrice = stockArr[0];

  for (let i = 2; i < stockArr.length; i++) {
    const potentialProfit = stockArr[i] - minPrice;

    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }

    if (stockArr[i] < minPrice) {
      minPrice = stockArr[i];
    }
  }

  return maxProfit;
};

console.log(getMaxProfit(stockPrices)); // logs 6
console.log(getMaxProfit([10, 9, 2]));
