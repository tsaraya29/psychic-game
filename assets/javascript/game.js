var wins = 0;
var losses = 0;
var chances = 7;
var hangman = [];
var computerChoices = ["a", "b","c","d","e", "f", "g" ,"h", "i", "j" ,"k", "l", "m", "n", "o" ,"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {
    var userGuess = event.key; // determines key user pressed     
    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
    }
   
    chances--;
    hangman.push(" " + userGuess); 
     //2nd if statement here
    document.getElementById("userGuess").innerHTML = userGuess;
    document.getElementById("computerLetter").innerHTML = computerGuess;
    document.getElementById("chances").innerHTML = chances;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("hangman").innerHTML = hangman;
};
