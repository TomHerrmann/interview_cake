/*
You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
*/

const flightMovies = (flightLength, movieLengths) => {
  const timeDifference = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    timeDifference.add(flightLength - movieLengths[i]);
  }

  for (let i = 0; i < movieLengths.length; i++) {
    if (
      timeDifference.has(
        flightLength - movieLengths[i] && movieLengths[i] * 2 !== flightLength
      )
    )
      return true;
  }

  return false;
};
