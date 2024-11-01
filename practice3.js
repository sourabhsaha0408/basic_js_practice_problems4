//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.

const firstNumber = 0;
const secondNumber = -1;
const thirdNumber = 4;

if (firstNumber > secondNumber > thirdNumber) {
  console.log(`${firstNumber}, ${secondNumber}, ${thirdNumber}`);
} else if (secondNumber > thirdNumber > firstNumber) {
  console.log(`${secondNumber}, ${thirdNumber}, ${firstNumber}`);
} else {
  console.log(`${thirdNumber}, ${firstNumber}, ${secondNumber}`);
}
