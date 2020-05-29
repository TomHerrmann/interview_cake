/* 
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

For example:

  { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

your function would return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
*/

const mergeSortMeetings = (meetings) => {
  if (meetings.length <= 1) return meetings;

  const middle = Math.floor(meetings.length / 2);

  const left = meetings.slice(0, middle);
  const right = meetings.slice(middle);

  const sortedLeft = mergeSortMeetings(left);
  const sortedRight = mergeSortMeetings(right);

  const merged = [];
  let rightIndex = 0;
  let leftIndex = 0;

  while (merged.length < left.length + right.length) {
    if (
      leftIndex < left.length &&
      (rightIndex === right.length ||
        sortedLeft[leftIndex].startTime < sortedRight[rightIndex].startTime)
    ) {
      merged.push(sortedLeft[leftIndex]);
      leftIndex += 1;
    } else {
      merged.push(sortedRight[rightIndex]);
      rightIndex += 1;
    }
  }

  return merged;
};

const mergeRanges = (meetings) => {
  // create a condensedMeetings array
  const condensedMeetings = [Object.assign({}, meetings[0])];

  const sortedMeetings = mergeSortMeetings(meetings);

  sortedMeetings.forEach((currentMeeting) => {
    const lastMeeting = condensedMeetings[condensedMeetings.length - 1];
    if (currentMeeting.startTime <= lastMeeting.endTime) {
      lastMeeting.endTime = Math.max(
        lastMeeting.endTime,
        currentMeeting.endTime
      );
    } else if (currentMeeting.endTime > lastMeeting.endTime) {
      condensedMeetings.push(Object.assign({}, currentMeeting));
    }
  });

  // return condensedMeeting array
  return condensedMeetings;
};

console.log(
  mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ])
);

console.log(
  mergeRanges([
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
  ])
);
