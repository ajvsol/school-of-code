let attempts = 0;

function authenticateUser() {
    while (attempts < 3) {
        let userPassword = prompt("Please enter the password.");
        console.log(userPassword);
        attempts = attempts + 1;
        if (userPassword === "myPassword1!") {
            alert("Password successful");
            return true;
        } 
    }
    if (attempts => 3) {
        return false;
    }
}

// get answer here
let isLoggedIn = authenticateUser();

// you should reveal the secret after the function is called using the boolean isLoggedIn
if (isLoggedIn) {
    console.log('Super Secret Stuff');
}