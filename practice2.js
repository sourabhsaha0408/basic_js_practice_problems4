//Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

const firstNumber = 3;
const secondNumber = -7;
const thirdNumber = 2;

if (firstNumber * secondNumber * thirdNumber > 0) {
  console.log(`The sign is +`);
} else if (firstNumber * secondNumber * thirdNumber < 0) {
  console.log(`The sign is -`);
} else {
  console.log(`The product is 0`);
}
