/*
I want to learn some big words so people think I'm smart.

I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

  const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.
*/

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

const findRotationPoint = (arr) => {
  // divide arr in half
  const middle = Math.floor(arr.length / 2);
  // check if middle is the rotation
  // see if it is greater than the previous element but less than the following element
  if (arr[middle] > arr[middle] - 1 && arr[middle] > arr[middle] + 1) {
    return middle;
  }

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // if it is, return the index
  // if it isn't, move left or right accordingly

  //
};

console.log(findRotationPoint(words));
