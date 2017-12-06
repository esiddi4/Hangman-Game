// GLOBAL VARIABLES

// Array of words computer will choose from for puzzle
var words = [
	"friends",
	"the/fresh/prince/of/belair",
	"the/simpsons",
	"animaniacs",
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
		play();
	} else if (guessesRemaining === 0) {
		// Restart game
		start();
	}

}


// RUN GAME

start();
document.onkeypress = function(event) {
	console.log(currentWord);
  	guess = event.key;
  	checkGuess();
  	rounds();
};








// Display image and queue audio
var play = function () {

	if (currentWord === "friends") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/friends.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/friends.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "the/fresh/prince/of/belair") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/freshprince.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/freshprince.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "the/simpsons") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/simpsons.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/simpsons.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "animaniacs") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/animaniacs.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/animaniacs.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "home/improvement") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/homeimprovement.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/homeimprovement.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "buffy/the/vampire/slayer") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/buffy.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/buffy.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "rugrats") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/rugrats.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/rugrats.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "full/house") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/fullhouse.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/fullhouse.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "saved/by/the/bell") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/savedbythebell.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/savedbythebell.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "sabrina/the/teenage/witch") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/sabrina.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/sabrina.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "everybody/loves/raymond") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/raymond.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/raymond.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "seinfeld") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/seinfeld.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/seinfeld.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "hey/arnold") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/arnold.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/heyarnold.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "pinky/and/the/brain") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/pinkyandthebrain.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/pinkyandthebrain.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "boy/meets/world") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/boymeetsworld.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/boymeetsworld.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 

	else if (currentWord === "family/matters") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/familymatters.mp3' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://esiddi4.github.io/Hangman-Game/assets/images/familymatters.jpeg' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
}
	




