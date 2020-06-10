/*
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
"But 'ivicc' isn't a palindrome!"

If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. Jumping in with a flawed understanding of the problem doesn't look good in an interview.
*/

const palindrone = (str) => {
  const cache = {};

  for (let i = 0; i < str.length; i++) {
    cache[str[i]] = cache[str[i]] + 1 || 1;
  }

  let passedOdd = false;

  for (let ksys in cache) {
    if (cache[key] % 2 !== 0) {
      if (!passedOdd) passedOdd = true;
      else return false;
    }

    return true;
  }
};

console.log(palindrone('civic')); // => true
console.log(palindrone('ivicc')); // => true
console.log(palindrone('civil')); // => false
console.log(palindrone('livci')); // => false
