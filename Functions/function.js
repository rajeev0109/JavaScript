// function sum(a, b) {
//   console.log(a + b);
// }

// sum(4, 5);

// // arrow funtion

// const arrowSum = (a, b) => {
//   console.log(a + b);
// };

// arrowSum(5, 6);

// // Create a funtion using function keyword that takes string as input and returns the number of vowels in the string

// function vowelCount(str) {
//   let cnt = 0;
//   str.toLowerCase();
//   for (let characters of str) {
//     if (
//       characters === 'a' ||
//       characters === 'e' ||
//       characters === 'i' ||
//       characters === 'o' ||
//       characters === 'u'
//     ) {
//       cnt++;
//     }
//   }
//   return cnt;
// }

// let ans = vowelCount('Rajeev');
// console.log(ans);

// // Using Arrow funtion

// const arrowVowelCount = (str) => {
//   let cnt = 0;
//   str.toLowerCase();
//   for (let characters of str) {
//     if (
//       characters === 'a' ||
//       characters === 'e' ||
//       characters === 'i' ||
//       characters === 'o' ||
//       characters === 'u'
//     ) {
//       cnt++;
//     }
//   }
//   return cnt;
// };
// let ans1 = arrowVowelCount('Rajeev Kumar');
// console.log(ans1);

// // For a given array of numbers, print the squares of each element using for-each loop.

// let array1 = [1, 2, 7, 4, 5];

// const calcSquare = (num) => {
//   console.log(num ** 2);
// };
// array1.forEach(calcSquare);

// // You are given an array of marks of students, filter out the marks that are greater than 90

// let marks = [60, 79, 90, 80, 91, 94, 99];

// let output = marks.filter((mark) => {
//   return mark >= 90;
// });
// console.log(output);

let n = parseInt(prompt('Enter a number'));
console.log(typeof n);
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(i + 1);
}
console.log(arr);

let output = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(output);
let output1 = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log(output1);
