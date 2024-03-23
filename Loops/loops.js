// For loop
// for (let i = 0; i < 5; i++) {
//   console.log(i + ' : Rajeev Kumar Singh');
// }

// console.log('For Loop has ended');

// Calculate sum of n numbers

// let num = prompt('Enter a number : ');
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//   sum += i;
// }
// alert('The sum of ' + num + ' numbers is ' + sum);

// For of Loop
// let fname = 'Rajeev Kumar Singh';
// for (let i of fname) {
//   console.log(i);
// }

// For in Loop
// console.log('For in Loop');
// const student1 = {
//   name: 'Rajeev',
//   programm: 'B. Tech CSE',
//   age: 22,
// };
// for (let i in student1) {
//   console.log(student1[i]);
// }

// Q1. Print all the even numbers from 0 to 100

// console.log("Using for Loop")
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

console.log('Using while loop');

let i = 1;
while (i <= 100) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}
