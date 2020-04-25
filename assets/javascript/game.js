$(document).ready(function() {

    let targetNumber = 0;
    let redCrystal = 0;
    let blueCrystal = 0;
    let yellowCrystal = 0;
    let greenCrystal = 0;

    function targetNumberGen() {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
        console.log(" Number returned is " + targetNumber);

        $('#targetNum').html(targetNumber);
    }

    function crystalGenerator() {
        
     redCrystal = Math.floor(Math.random() * 12) + 1; 

     blueCrystal = Math.floor(Math.random() * 12) + 1; 

     yellowCrystal = Math.floor(Math.random() * 12) + 1; 

     greenCrystal = Math.floor(Math.random() * 12) + 1; 
    }


    targetNumberGen();
    crystalGenerator();

    let currentScore = 0;
    let userWins = 0;
    let userLosses = 0;


    $("#redCrystals").on("click", function() {
    currentScore = currentScore + redCrystal;
    $("#currentScore").html(currentScore);


    if (currentScore === targetNumber) {
        userWins = userWins + 1;
    $("#updateWins").html("updateWins: " + userWins);

    targetNumberGen();
    crystalGenerator();
    currentScore = 0;
    $("#currentScore").html(currentScore);
    }


    if (currentScore > targetNumber) {
    userLosses = updateLoss + 1;
    $("#updateLoss").html("updateLoss: " + userlosses);

    targetNumberGen();
    crystalGenerator();

        currentScore = 0;
        $("#currentScore").html(currentScore);
        }
        });

        $("#redCrystal").on("click", function() {
        currentScore = currentScore + redCrystal;
        $("#currentScore").html(currentScore);



        if (currentScore === targetNumber) {
            wins = wins + 1;
            $("#updateWins").html("Wins: " + wins);
            targetNumberGen();
            crystalGenerator();
            currentScore = 0;
            $("#currentScore").html(currentScore);
    }

            if (currentScore > targetNumber) {
            userLosses = userLosses + 1;
            $("#updateLoss").html("updateLoss: " + userLosses);

            targetNumberGen();
            crystalGenerator();
            currentScore = 0;
            $("#currentScore").html(currentScore);
            }
    });
     //Yellow Diamond
    $("#yellowCrystal").on("click", function() {
        currentScore = currentScore + yellowCrystal;
    $("#currentScore").html(currentScore);

            if (currentScore === targetNumberGen) {
                userWins = userWins + 1;
                $("#updateWins").html("Wins: " + wins);
            
                targetNumberGen();
                randomGemValuesGenerator();
                yourScoreIs = 0;
                $("#yourScore").html(yourScoreIs);
            }

             //When user loses, update losses, update message, reset Random Number and Gem Values
            if (currentScore > targetNumberGen) {
                losses = losses + 1;
                $("#losses").html("Losses: " + losses);
                $("#message").html("YOU LOSE");
                console.log("YOU LOSE");
                 //Reset Random Number and Gem Values
                randomNumberGenerator();
                randomGemValuesGenerator();
                yourScoreIs = 0;
                $("#yourScore").html(yourScoreIs);
            }
    });

     //Purple Diamond
    $("#purpleGem").on("click", function() {
        yourScoreIs = yourScoreIs + purpleGemNmbr;
         console.log(yourScoreIs); //Checking via console
        $("#yourScore").html(yourScoreIs);

            if (yourScoreIs === randomNumber) {
            wins = wins + 1;
                $("#wins").html("Wins: " + wins);
                $("#message").html("YOU WIN");
                console.log("YOU WIN");
                 //Reset Your Score, Random Number and Gem Values
                randomNumberGenerator();
                randomGemValuesGenerator();
                yourScoreIs = 0;
                $("#yourScore").html(yourScoreIs);
            }

             //When user loses, update losses, update message, reset Random Number and Gem Values
            if (yourScoreIs > randomNumber) {
                losses = losses + 1;
                $("#losses").html("Losses: " + losses);
                $("#message").html("YOU LOSE");
                console.log("YOU LOSE");
                 //Reset Random Number and Gem Values
                randomNumberGenerator();
                randomGemValuesGenerator();
            yourScoreIs = 0;
                $("#yourScore").html(yourScoreIs);
            }
    });




    $("#reset").on("click", function() {
        wins = 0;
        losses = 0;
        yourScoreIs = 0;
        $("#wins").html("Wins: " + 0);
        $("#losses").html("Losses: " + 0);
        $("#yourScore").html(yourScoreIs);
        $("#message").html();
        randomNumberGenerator();
        randomGemValuesGenerator();
    });



});