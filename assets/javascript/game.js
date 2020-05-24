$(document).ready(function() {

    let targetNumber = 0;
    let redCrystal = 0;
    let blueCrystal = 0;
    let yellowCrystal = 0;
    let greenCrystal = 0;
    let yourScoreIs = 0;
    let randomNumber = 0;


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
    $("#updateLoss").html("Loss: " + userlosses);

    targetNumberGen();
    crystalGenerator();

        currentScore = 0;
        $("#currentScore").html(currentScore);
        }
        });

        // This controls the red crystal //
    $("#redCrystal").on("click", function() {
        currentScore = currentScore + redCrystal;
    $("#currentScore").html(currentScore);

            if (currentScore === targetNumber) {
            userWins = userWins + 1;
            $("#updateWins").html("Wins: " + userWins);
            targetNumberGen();
            crystalGenerator();
            currentScore = 0;
            $("#currentScore").html(currentScore);
            }

            if (currentScore > targetNumber) {
            userLosses = userLosses + 1;
            $("#updateLoss").html("Loss: " + userLosses);
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

            if (currentScore === targetNumber) {
                userWins = userWins + 1;
                $("#updateWins").html("Wins: " + userWins);
                targetNumberGen();
                crystalGenerator();
                currentScore = 0;
                $("#currentScore").html(currentScore);
            }

            if (currentScore > targetNumber) {
                userLosses = userLosses + 1;
                $("#updateLosses").html("Losses: " + userLosses);
                targetNumberGen();
                crystalGenerator();
                currentScore = 0;
                $("#currentScore").html(currentScore);
            }
    });


    // Controls blue crystal//

    $("#blueCrystal").on("click", function() {
        currentScore = currentScore + blueCrystal;
        $("#currentScore").html(currentScore);

        if (currentScore === targetNumber) {
            userWins = userWins + 1;
            $("#updateWins").html("Wins: " + userWins);
            targetNumberGen();
            crystalGenerator();
            currentScore = 0;
            $("#currentScore").html(currentScore);
    }

            if (currentScore > targetNumber) {
            userLosses = userLosses + 1;
            $("#updateLoss").html("Loss: " + userLosses);

            targetNumberGen();
            crystalGenerator();
            currentScore = 0;
            $("#currentScore").html(currentScore);
            }
    });

    $("#greenCrystal").on("click", function() {
        currentScore = currentScore + greenCrystal;
        $("#currentScore").html(currentScore);



        if (currentScore === targetNumber) {
            userWins = userWins + 1;
            $("#updateWins").html("Wins: " + userWins);
            targetNumberGen();
            crystalGenerator();
            currentScore = 0;
            $("#currentScore").html(currentScore);
    }

            if (currentScore > targetNumber) {
            userLosses = userLosses + 1;
            $("#updateLoss").html("Loss: " + userLosses);

            targetNumberGen();
            crystalGenerator();
            currentScore = 0;
            $("#currentScore").html(currentScore);
            }
    });
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
        $("#updateWins").html("Wins: " + 0);
        $("#updateLosses").html("Losses: " + 0);
        $("#currentScore").html(yourScoreIs);
        targetNumberGen();
        crystalGenerator();
    });
;