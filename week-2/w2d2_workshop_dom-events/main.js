const button = document.querySelector("#click-me");

function handleClick(event) {
  // If clicked, console log you clicked me!
  console.log('You clicked me!');
  // If shift key pressed, change the inner text of the button to be NAILED IT
  console.dir(event);
  if (event.shiftKey === true) {
    button.textContent = 'NAILED IT!!';
  }
}

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

/* Task 2
There is also a button with a class of `.task-2` in the HTML.

👉 Select this button with `querySelector` and store it in a variable called `flowerButton`.

👉 Write a function that changes the [title of the document](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) to be these flower emojis `💐🌷🌼`.

👉 Add an event listener to the `flowerButton` which listens to the `click` event and calls your function from the previous step.

You can check if your code has worked by loading your page in the browser and checking to see that what's in the browser's tab for the pages changes to flowers when you press the flower button. */

let flowerButton = document.querySelector(".task-2");

flowerButton.addEventListener("click", changeTitle);

function changeTitle() {
  document.title = "💐🌷🌼";
}

// Select the input element with id #title-changer.
let input = document.querySelector('#title-changer');

// Add an event listener to that input which listens to the keyup event 
// and calls your function.
input.addEventListener('keyup', titleChanger);

// Write a function that takes in an event object as a parameter.
function titleChanger(event) {
  // When that function is called, read the value from the value property, 
  // which is nested in an object on the target property of the event. 
  // Set the text in the h1 tag on the page to be that value.
  console.log(event.target.value);
  document.querySelector('h1').textContent = event.target.value;
}

// Listen to the mouseenter event on the img element and change the color 
// of the h1 to hotpink when the mouse cursor is over the image.

// store the img element in a variable so we can access it
let image = document.querySelector('img');
// create an event listener using mouseenter on this variable
image.addEventListener('mouseenter', colourChanger)

let h1 = document.querySelector('h1');
//function that will change the colour of h1 to hotpink
function colourChanger() {
  // change the h1's hotpink property 
  h1.style.color = 'hotpink';
}

// add event listener on image with mouseleave event
image.addEventListener('mouseleave', revertInitial);
// new function which will change the colour of h1 back to initial
function revertInitial() {
  h1.style.color = 'initial'
}