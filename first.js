console.log('Hello Rajeev!');

const number = prompt('Enter a number');

if (number % 5 == 0) {
  alert('True');
} else {
  alert('False');
}

const marks = prompt('Enter your marks');
if (marks > 80) {
  alert('Your grade is A');
} else if (marks > 60) {
  alert('Yout grade is B');
} else if (marks > 40) {
  alert('Your grade is C');
} else {
  alert('You are failed in the subject!');
}
