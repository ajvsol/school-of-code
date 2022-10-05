const favouriteSongs = ['Tiny Dancer', 'Running Up That Hill', 'Don\'t Stop Moving', 'Tragedy', 'Crazy Horses'];

const pyramidScheme = [1, 2, 4, 8, 16, 32, 64];

const friends = [
    {name: 'Chris', specialSkill: 'changing lives'},
    {name: 'Lizzie', specialSkill: 'being friendly'},
    {name: 'Ben', specialSkill: 'code rapping'},
    {name: 'Tao', specialSkill: 'hand raising'},
    {name: 'Liz', specialSkill: 'crochet'},
    {name: 'Patrick', specialSkill: 'Call of Duty'},
    {name: 'Tim', specialSkill: 'analogies'},
    {name: 'James', specialSkill: 'friendship'},
    {name: 'Joseph', specialSkill: 'being positive'},
    {name: 'Max', specialSkill: 'papier-mâché'}
];

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

console.log(options[2]); // month born

console.log(options[9]); // mother born

console.log(options[11]); // favourite 

let englishNumbers = ["one", "two", "three", "four", "five"];

 
for (let count = 0; count <= englishNumbers.length; count++) {
    console.log(englishNumbers[count]);   
}

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

for (let count = 0; count < words.length; count++) {
    words[count] = words[count] + "t"
}

console.log(words);

// Task 6

let classesFavouriteColours = [
    ['purple', 'black', 'grey'],
    ['red', 'yellow', 'blue'],
    ['magenta', 'black', 'blacker', 'super black']
];

// Nested objects in array
let leagueTeams1 = [
    {supp: 'lux', adc: 'ashe', mid: 'veigar'},
    {supp: 'karma', adc: 'jhin', mid: 'annie'}
];

// Nested objects in object
let leagueTeams2 = {
    team1: {
        supp: 'lux', 
        adc: 'ashe', 
        mid: 'veigar'
    },
    team2: {
        supp: 'karma',
        adc: 'jhin',
        mid: 'annie'
    }
};

function arrayManipulator(itemNumber, colourNumber, colourString) {
    classesFavouriteColours[itemNumber][colourNumber] = colourString;
}