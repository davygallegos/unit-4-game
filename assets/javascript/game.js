/* --- Var one for each gem ---

--- each gem needs a random number var ----
--- Computer needs a random number var ---
--- 
--- */
// var redGem = getElementById('#ReCrystal');
// var blueGem = $('#blCrystal')
// var yellowGem = $('#yeCrystal');
// var greenGem = $('#grCrystal');
var totalWins = 0;
var totalLoses = 0;
var computerRandom ;
var totalNumber ;
var crystalBlue ;
var crystalYellow ;
var crystalRed ;
var crystalGreen ;
var reset ;

//Crystals activity

//step 1 - start the game
    //computer needs to pick a number
    //need to assign a random number to crystal
    //set total number to 0
// var start = function () 
function start() {
    console.log('running');
    totalNumber = 0;
    computerRandom = Math.floor(Math.random() * 111) + 19;
    crystalBlue = Math.floor(Math.random() * 9) + 1;
    crystalYellow = Math.floor(Math.random() * 9) + 1;
    crystalRed = Math.floor(Math.random() * 9) + 1;
    crystalGreen = Math.floor(Math.random() * 9) + 1;
    $('.computerGuesses').append(computerRandom);
    $('.totalNumber').append(totalNumber);
}
start();

//step 2 do something with crystal click
    //add clicks to totalNumber
    //show total Number
    //check if we won or lost
$("#blCrystal").on("click", function() {
    totalNumber = totalNumber + crystalBlue
    $('.totalNumber').text(totalNumber);
    //check if you won if statements 

});
$("#grCrystal").on("click", function() {
    totalNumber = totalNumber + crystalGreen
    $('.totalNumber').text(totalNumber);
    scoreCheck();
});
$("#ReCrystal").on("click", function() {
    totalNumber = totalNumber + crystalRed
    $('.totalNumber').text(totalNumber);
    scoreCheck();

});
$("#yeCrystal").on("click", function() {
    totalNumber = totalNumber + crystalYellow
    $('.totalNumber').text(totalNumber);
    scoreCheck();

});

//Step
//Step win or lose
function scoreCheck() {
    if (totalNumber===computerRandom) {
        $ (".playAgain").text("You Won Champ, Go get em")  
        totalWins++
        $(".wins").text("Wins = "+ totalWins)
        start();
        
        
    }
    else if (totalNumber>computerRandom) {
        $ (".playAgain").text("You Lost Scumbag, Go get em")  
        totalLoses++
        $(".losses").text("Loser Count = "+ totalLoses)
        start();
    }
    
}
// if statements
// 
// need a stop click after game

