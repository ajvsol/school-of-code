# Events

## Task 1 - The event object:

In `main.js`, you will find some code that looks like this:

```js
const button = document.querySelector("#click-me");

function handleClick(event) {
  // code goes here!
}

button.addEventListener("click", handleClick);
```

We have selected the button with id `#click-me` and stored the reference to it in the `button` variable and have added an event listener to listen for when the button is pressed. When the button is pressed, the function `handleClick` will be called.

👉 In the function, add code so that when the button is clicked, you console.log "You clicked me!"

👉 Add code so that if the `shiftKey` property of the event is `true` (in other words, if the user holds the shift key down while they click the button), then change the text in the button to be `"NAILED IT!!"`.

## Task 2 - Adding an event listener:

There is also a button with a class of `.task-2` in the HTML.

👉 Select this button with `querySelector` and store it in a variable called `flowerButton`.

👉 Write a function that changes the [title of the document](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) to be these flower emojis `💐🌷🌼`.

👉 Add an event listener to the `flowerButton` which listens to the `click` event and calls your function from the previous step.

You can check if your code has worked by loading your page in the browser and checking to see that what's in the browser's tab for the pages changes to flowers when you press the flower button.

## Task 3 - Different events:

There are [many different kinds of events](https://developer.mozilla.org/en-US/docs/Web/Events) other than `click`.

Event.target is a reference to the element that fired the event. If we clicked on a button like before, the target would be that button. In this case, for this task, we will be listening to a text input instead.

👉 Select the input element with id `#title-changer`.

👉 Write a function that takes in an event object as a parameter.

👉 When that function is called, read the value from the `value` property, which is nested in an object on the `target` property of the event. Set the text in the `h1` tag on the page to be that value.

👉 Add an event listener to that input which listens to the `keyup` event and calls your function.

You can check if your code has worked by loading your page in the browser again; when you type in the input field, you should see your text show up on the page.

## Task 4 - Different events:

👉 Listen to the `mouseenter` event on the `img` element and change the color of the `h1` to `hotpink` when the mouse cursor is over the image.

👉 Listen to the `mouseleave` event on the `img` element and change the color of the `h1` back to `initial` when the mouse cursor is then removed from the image.

## Task 5 - Toggle:

To toggle is to switch between two states. In this task we will be toggling a class on an element. This means that when the function is first called, it should add the class to that element, and when the function is next called, it should remove the class. See [this page in the docs for more information about adding/removing classes with JS](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).

👉 Add an event listener to the checkbox input - use Google to research how to handle events with checkboxes!

👉 Make the checkbox toggle a class of `.funky` on and off of the `h1` element.

## Task 6 - Keep practicing:

👉 Delete and repeat any tasks you struggled with. Build that muscle memory! 🧠💪

👉 Find even more [types of events](https://developer.mozilla.org/en-US/docs/Web/Events) and practice listening to them.
