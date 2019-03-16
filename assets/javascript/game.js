/* --- Var one for each gem ---

--- each gem needs a random number var ----
--- Computer needs a random number var ---
--- 
--- */
// var redGem = getElementById('#ReCrystal');
// var blueGem = $('#blCrystal')
// var yellowGem = $('#yeCrystal');
// var greenGem = $('#grCrystal');
var totalWins = '';
var totalLoses = '';
var computerRandom = '';
var totalNumber = '0';
var crystalBlue = 0;
var crystalYellow = 0;
var crystalRed = 0;
var crystalGreen = 0;

//Crystals activity

//step 1 - start the game
    //computer needs to pick a number
    //need to assign a random number to crystal
    //set total number to 0
var start = function () {
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
});
$("#ReCrystal").on("click", function() {
    totalNumber = totalNumber + crystalRed
    $('.totalNumber').text(totalNumber);
});
$("#yeCrystal").on("click", function() {
    totalNumber = totalNumber + crystalYellow
    $('.totalNumber').text(totalNumber);
});

//Step
//Step win or lose
// if statements
// alert 
