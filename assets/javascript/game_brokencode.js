
     /*Psuedocode
    Input: User Guess, Computer's random guess, # of guesses

    Processes: comparing user guess to computer letters, counter of guesses, 

            If the user guess and computer guess match, change win to 1 and display message, you win.
            If the user guess and computer guess don't match, then write the bad guess to the page, add 1 to loss column, chances left go down by 1

    Output: chosen letters displayed,  Wins, Losses, # of guesses left

    */
    var computerChoices = ["a", "b","c","d","e", "f", "g" ,"h", "i", "j" ,"k", "l", "m", "n", "o" ,"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var chances = 7;
    var wins = 0;
    var losses = 0;    
    
    var chancesText = document.getElementById("chances");
    var userGuessText = document.getElementById("guesses");      
    var computerGuessText = document.getElementById("computerLetter");
    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var hangmanGuessText = document.getElementById("hangman");

    var hangmanGuess = []; //this works    

    document.onkeyup = function(event) {
        var userGuess = event.key; // determines key user pressed     
        
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];   
        if (userGuess === computerGuess) {            
             wins++;
                          }
         else {
            chances--;
            losses++;  }                             
          
        hangmanGuess.push(" " + userGuess); //this works
        chancesText.textContent = chances;
        userGuessText.textContent = userGuess;
        computerGuessText.textContent = computerGuess;
        winsText.textContent = wins;
        lossesText.textContent = losses;
        hangmanGuessText.textContent = hangmanGuess;
          };
         
        
        
        
        


        

        
    