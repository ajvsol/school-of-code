
console.log("HELLO WORLD!");

let myFavNumber = 80;
if (myFavNumber === 5) {
    console.log('My favourite number is 5 too!');
}

let myVariable = prompt('What\'s your name?');
if (myVariable === 'Ben') {
    console.log('That\'s my name too!');
} else {
    console.log(myVariable + '?! That\'s a silly name...')
}

let weatherType = 'raining';
if (weatherType === 'raining') {
    console.log('Take an umbrella!');
} else {
    if (weatherType === 'sunny') {
        console.log('Don\'t forget suncream!');
    } else {
        console.log('Must be a normal, grey, non-descript day!');
    }
}