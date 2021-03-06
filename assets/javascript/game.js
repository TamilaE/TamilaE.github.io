var wins = 0;
var losses = 0;
var guessesLeft = 9;
var youGuessed = []; 
var computerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

document.onkeyup = function(event) {
    var userLetter = String.fromCharCode(event.keyCode).toLowerCase(); //whenever the user pushes a key on keyboard print in html page as a lowercase letter.
    var computerLettterChoice = computerLetters[Math.floor(Math.random()*computerLetters.length)]; // here the computer selects a letter randomly from the computerLetters array.
    youGuessed.push(userLetter); // the letter that the user chose will be added to youGuessed array.
    if (userLetter == computerLettterChoice) {
        wins++; //Each time User guesses correctly one score will be added to their wins.
        guessesLeft = 9; 
        youGuessed.length = 0; //resets
    }
    else if (guessesLeft == 0){
        losses++; //Each time User guesses the wrong letter one score will be added to their losses.
        guessesLeft = 9;
        youGuessed.length = 0;
    }
    else if (userLetter !== computerLettterChoice){
        guessesLeft--; //Each time they guess one number will deducted from the guessesLeft.
    }  

    var html = "<h1>The Psychic Game!</h1>" +
    "<p>Guess what letter I'm thinking of</p>" +
    "<p>Wins: " + wins + "</p>" + 
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" + 
    "<p>You Guessed so far: " + youGuessed + "</p>"
    ;
   html= document.querySelector("#Psychic").innerHTML;
}