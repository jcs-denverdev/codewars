// 8 kyu Kata: Reversed Sequence
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  // declare empty array where we can deposit nums
  let arr = []
  
  // loop through provided number n
  for (let i = n; i > 0; i--) {
    // push nums to empty array
    arr.push(i)
  }
  return arr;
  
};