/*According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits,
and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 
1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.*/

let sum = 0;

for (i = 0; i < 50; i++) {
  let a = String(sum);
  for (let j of a) {
    sum = sum + Number(j) * Number(j);
    if (sum == 1) {
      console.log(i);
      break;
    }
  }
  for (let k of String(sum)) {
    sum = sum + Number(k) * Number(k);
    if (sum == 1) {
      console.log(i);
      break;
    }
  }
  console.log(sum);
}


