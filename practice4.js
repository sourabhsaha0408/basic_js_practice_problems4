//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.

const firstNumber = -5;
const secondNumber = -2;
const thirdNumber = -6;
const fourthNumber = 0;
const fifthNumber = -1;

if (
  firstNumber > secondNumber &&
  firstNumber > thirdNumber &&
  firstNumber > fourthNumber &&
  firstNumber > fifthNumber
) {
  console.log(`The largest number is ${firstNumber}`);
} else if (
  secondNumber > firstNumber &&
  secondNumber > thirdNumber &&
  secondNumber > fourthNumber &&
  secondNumber > fifthNumber
) {
  console.log(`The largest number is ${secondNumber}`);
} else if (
  thirdNumber > firstNumber &&
  thirdNumber > secondNumber &&
  thirdNumber > fourthNumber &&
  thirdNumber > fifthNumber
) {
  console.log(`The largest number is ${thirdNumber}`);
} else if (
  fourthNumber > firstNumber &&
  fourthNumber > secondNumber &&
  fourthNumber > thirdNumber &&
  fourthNumber > fifthNumber
) {
  console.log(`The largest number is ${fourthNumber}`);
} else {
  console.log(`The largest number is ${fifthNumber}`);
}
