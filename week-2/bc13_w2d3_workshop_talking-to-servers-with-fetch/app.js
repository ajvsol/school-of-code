console.log("It's Kanye time...");

// Store all the quotes
let quoteArray = []; 
let string = "";

// write async function to encapsulate our whole request
async function callApi() {
    // store retrieved response in a variable called response
    // variable assigned to await fetched response object
    let response = await fetch("https://api.kanye.rest");
    // create a variable called data to store the JSON from the response 
    // object, using the json() method
    let data = await response.json();
    // querySelector the appropriate h1 with the id
    let h1 = document.querySelector('#kanye-quote');
    // assign this h1 to use variable `data`
    h1.textContent = data.quote;
    string = data.quote;
    // create a loop to iterate over all the quotes

    checkSameQuote();

    if (!quoteArray.includes(string)) {
        createListItem(string);
        quoteArray.push(string);
    } else {
        console.log(string);
    }
            // create an array to store all the quotes
        // else (if it is the same): don't run createListItem
}

function checkSameQuote() {
    for (let i = 0; i < quoteArray.length; i++) {
        // if statement to check if the quote isn't the same as an existing 
        // one
        // console.log(i);
        if (string === quoteArray[i]) {
            return true;
        }
    }
}

// call the function when the page loads
// callApi();

// Task 2
// store the button in a variable
// add event Listener to button that passes in the 
    //  callApi function for the click event
let button = document.querySelector("#new-quote-button");
button.addEventListener("click", callApi);

// Task 3
// assign a variable that represent kanyequotehistory ol
let ol = document.querySelector("#kanye-quote-history");
// create function createListItem(string)

function createListItem(string) {   
    let li = document.createElement("li")
    li.textContent = string;
    ol.appendChild(li);
}
