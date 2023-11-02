let gameResult = document.getElementById("gameResult")
let userInput = document.getElementById("userInput")
let randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)
function check() {
    let guessedNumber = parseInt(userInput.value)
    if (guessedNumber > randomNumber) {
        gameResult.innerHTML = "Your Guess is too high!Try Again"
        gameResult.style.backgroundColor = "#1e217c"
    }
    else if (guessedNumber < randomNumber) {
        gameResult.innerHTML = "Your Guess is too low! Try again"
        gameResult.style.backgroundColor = "#1e217c"
    }
    else if (guessedNumber == randomNumber) {
        gameResult.innerHTML = "Congratulations, You have won!"
        gameResult.style.backgroundColor = "#34a853"
    }
    else {
        gameResult.innerHTML = "Invalid Input! Please enter a valid number."
        gameResult.style.backgroundColor = "#ff9900"
    }

}