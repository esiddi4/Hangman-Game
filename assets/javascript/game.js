// GLOBAL VARIABLES

// Array of words computer will choose from for puzzle
var words = [
	"friends",
	"the/fresh/prince/of/belair",
	"the/simpsons",
	"the/animaniacs",
	"home/improvement",
	"buffy/the/vampire/slayer",
	"rugrats",
	"full/house",
	"saved/by/the/bell",
	"sabrina/the/teenage/witch",
	"everybody/loves/raymond",
	"seinfeld",
	"hey/arnold",
	"pinky/and/the/brain",
	"boy/meets/world",
	"family/matters"
	];

var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Current word, chosen randomly from words array
var currentWord = "";
// Array of letters in current word
var letters = [];
// Displayed puzzle
var currentPuzzle = [];
// Array of incorrect letters guessed
var incorrect = [];

// User's guess
var guess = "";
// Wins count
var wins = 0;
// Number of guesses remaining this round
var guessesRemaining = 10;

// Display puzzle to HTML
var displayToBrowser = function () {
	document.getElementById("word").innerHTML = currentPuzzle.join(" ");
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("guesses").innerHTML = guessesRemaining;
	document.getElementById("letters").innerHTML = incorrect;
}

// Reset game
var reset = function () {
	currentPuzzle = [];
	incorrect = [];
	guessesRemaining = 10;
}

// Computer randomly generates word from words array
var generateWord = function () {
	currentWord = words[Math.floor(Math.random() * words.length)];
	letters = currentWord.split("");
}


// Create Hangman puzzle
var start = function () {

	reset();
	generateWord();

	for (var i = 0; i < letters.length; i++) {

			if (alphabetLetters.indexOf(letters[i]) > -1) {
				currentPuzzle.push("__ ")
			} else {
				// display "/" so user can distinguish space between words in puzzle
				currentPuzzle.push(letters[i]);
			}

	}

	displayToBrowser();
}



var checkGuess = function () {
	var correctGuess = false;

	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === guess) {
			correctGuess = true;
		}
	}


	console.log(correctGuess);

	if (correctGuess) {
		for (var j = 0; j < currentWord.length; j++) {
			if (currentWord[j] === guess) {
				// Replace "_" with correct letter guessed
				currentPuzzle[j] = guess;
				document.getElementById("word").innerHTML = currentPuzzle.join(" ");

			}
		}
	} else if (!incorrect.includes(guess) && (alphabetLetters.indexOf(guess) > -1)) {
				incorrect.push(guess);
				// Decrease guessesRemaining by 1
				guessesRemaining--;
	}

}



var rounds = function () {

	displayToBrowser();

	if (currentPuzzle.join("") === currentWord) {
		// Add 1 to win score
		wins++;
		// Update score
		document.getElementById("wins").innerHTML = wins;
		// Play music & display cover
		// play();
		start();
	} else if (guessesRemaining === 0) {
		// Restart game
		start();
	}

}









start();

document.onkeypress = function(event) {
  guess = event.key;
  // console.log(guess);
  checkGuess();
  console.log(incorrect)
  rounds();
  console.log(currentPuzzle.join(""));
  console.log(currentWord);
};




