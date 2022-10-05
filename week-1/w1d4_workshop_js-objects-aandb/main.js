// const myHouse = {
//     stories: 2,
//     parking: false,
//     bedrooms: 2,
//     garden: true,
//     energy: 'D'
// };

// const myCar = {
//     colour: 'red',
//     wheels: 4,
//     powerSteering: true,
//     seats: 2,
//     mpg: 20
// };

// const myFavouriteFilm = {
//     title: 'The Dark Knight',
//     releaseDate: 2008,
//     leadActor: 'Christian Bale'
// };

// let person = {
//     name: "Ben",
//     likesChocolate: true,
// };

// if (person.name === 'Ben' && person.likesChocolate === true) {
//     console.log("Ben loves chocolate");
// } else if (person.name === 'Ben' && person.likesChocolate === false) {
//     console.log("Ben hates chocolate");
// } else if (person.likesChocolate === true) {
//     console.log(person.name + " loves chocolate");
// } else if (person.likesChocolate === false) {
//     console.log(person.name + " hates chocolate");
// }

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

let desiredPleasantry = bensPhrases.smallTalk;

console.log(desiredPleasantry); 

// Task 4
let me = {
  firstName: "Belle",
  lastName: "Francis",
  isBootcamper: false,
};

me.isBootcamper = true;

// Task 5
let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};

let importantText = communication.payload.text;

if (communication.payload.priority === 'URGENT') {
  console.log(importantText)
}