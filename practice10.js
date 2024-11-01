//Write a JavaScript program to construct the following pattern, using a nested for loop.

let star = "";
for (i = 0; i < 5; i++) {
  star = "";
  for (j = 0; j < i + 1; j++) {
    star += "* ";
  }
  console.log(star);
}

// for (i = 0; i < 5; i++) {
//   star += "*";
// }

// console.log(star);
