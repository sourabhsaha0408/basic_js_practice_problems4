//Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

let gcd = 0;

const firstNumber = 360;
const secondNumber = 336;

for (i = 1; i <= secondNumber; i++) {
  if (firstNumber % i == 0 && secondNumber % i == 0) {
    gcd = i;
  }
}

console.log(gcd);
