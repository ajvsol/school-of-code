const hand = document.querySelector(".hand");

// hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of 
                                        //how to rotate the hand!
// 6 degrees per second
// use setInterval method with a function that rotates by 6 degrees
// setInterval should trigger every 1 second
// 
let start = true;
let number = 0;

function tick() {
    if (number < 349) {
        number = number + 6;
    } else {
        number = 0;
    }
    console.log(number);
    hand.style.transform = `rotate(${number}deg)`;
}

setInterval(tick, 1000);

// create a variable to store the current second count
    // if degrees < 360 then increment the count by 6 each loop
    // else if it's > then it resets
