// Pseudocode of the Game
// CSS done 
// make list of the words
// generateRandomWord
// generate underscores for letters as mush as length
// retrive key from player push to indexChecker
// Change underscores to letter or increase wrong guess numbers
// Win or lose condition indexChecker
// Track totals
// if won or lost start again with new game after alerting



// ***PICKS A RANDOM WORD FROM ARRAY***
function generateRandomWord() {
    randomWord = words[Math.floor(Math.random() * (words.length))];
}


var words = ["ahmet", "mehmet", "apple"];
var randomWord = "";
var lives;
var winCounter;
var guesses;
var indexChecker;
var gamesWon = 0;
var donutBite = 0;

// ***ADD UNDERSCORES BASED ON WORD LENGTH***
function addSpaces(randomWord) {
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] != " ") {
            $("<span class='letters'>").text("_ ").appendTo("#chalk");
        } else {
            $("<span class='letters'>").html('&nbsp&nbsp&nbsp;').appendTo("#chalk");
            winCounter++;
        }
    }
}


