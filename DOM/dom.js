let heading = document.querySelector('h2');

heading.innerText = 'Hello JavaScript from Rajeev kumar singh';

let divs = document.querySelectorAll('.box');

let i = 1;
for (div of divs) {
  div.innerText = `Box - ${i}`;
  i++;
}

// Create a new button element and give it a text "Click me ", background color of red and text color of white and Insert the button as the first element of the body tag

let btn = document.createElement('button');
btn.innerText = 'Click me';
btn.style.color = 'white';
btn.style.backgroundColor = 'red';
document.querySelector('body').prepend(btn);

// Create a p tag in html and add a class to it and give it some styling now create a new class in css and add this class to the p tag using js
let para = document.querySelector('p');
para.classList.add('para2');

let togglebtn = document.querySelector('#togglebtn');
let body = document.querySelector('body');
let mode = 'light';

togglebtn.addEventListener('click', () => {
  if (mode === 'light') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    mode = 'dark';
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    mode = 'light';
  }
});
