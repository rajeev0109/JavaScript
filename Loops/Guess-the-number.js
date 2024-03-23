let num = Math.floor(Math.random() * 10);
console.log(num);

let guessNumber = prompt('Enter a number between 1 to 10');

while (guessNumber != num) {
  guessNumber = prompt('Enter again you have entered a wrong number.');
}
alert('You have guessed the correct number ' + num);
