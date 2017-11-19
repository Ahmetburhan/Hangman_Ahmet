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


// JavaScript function that wraps everything
$(document).ready(function() {

      // Gets Link for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("sound/TheSimpsons.mp3");

      // Theme Button
      $(".theme-button").on("click", function() {
      	audioElement.play();
      });

      $(".pause-button").on("click", function() {
      	audioElement.pause();
      });

}
