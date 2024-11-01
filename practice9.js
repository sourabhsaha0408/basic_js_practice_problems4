//Write a JavaScript program to find the Armstrong numbers of 3 digits.

for (i = 100; i < 1000; i++) {
  let num = String(i);
  if (
    Number(num.charAt(0)) ** 3 +
      Number(num.charAt(1)) ** 3 +
      Number(num.charAt(2)) ** 3 ==
    i
  ) {
    console.log(i);
  }
}