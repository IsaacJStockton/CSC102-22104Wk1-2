function countDownTimer(){
    console.log("countDownTimer() started");
    var currTime = 50;
    document.getElementById("BlastoffText").innerHTML = currTime;
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = currTime;
        console.log("45");
        currTime = currTime -5
    },5000);
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = currTime;
        console.log("40");
        currTime = currTime -5
    },10000);
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = currTime;
        console.log("35");
        currTime = currTime -5
    },15000);
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = currTime;
        console.log("30");
        currTime = currTime -5
    },20000);
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = currTime;
        console.log("25");
        currTime = currTime -5
    },25000);
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = currTime;
        console.log("20");
        currTime = currTime -5
    },30000);
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = currTime;
        console.log("15");
        currTime = currTime -5
    },35000);
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = currTime;
        console.log("10");
        currTime = currTime -5
    },40000);
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = currTime;
        console.log("5");
        currTime = currTime -5
    },45000);
    setTimeout(function(){
        document.getElementById("BlastoffText").innerHTML = "Blastoff!!!";
        console.log("Blastoff");
        currTime = currTime -5
    },50000);
}
//the counter for wins
var wins = 0;
//The counter for losses
var losses = 0;
//The counter for ties
var ties = 0;
// 
function startCraps(){
    //starts the game
    console.log("Craps game started");
    //it creats a dies and it assigns it a random number and multiplies by 6 and rounds it up
    var die1 = Math.ceil(6 * Math.random());
    // it creats a dies and it assigns it a random number and multiplies by 6 and rounds it up
    var die2 = Math.ceil(6 * Math.random());
    // it prints out the resualts of die 1
    document.getElementById("die1Res").innerHTML = die1;
    //it prints out the resualts of die 2 by giving a random number
    document.getElementById("die2Res").innerHTML = die2;
    //it adds up the resault of the dices
    var diceSum = die1 + die2;
    //it prints out the resualt of the sum of the two dices
    document.getElementById("sumRes").innerHTML = diceSum;
    //test to see if the sum is 7 or 11 meaning a loss game
    if(diceSum == 7 || diceSum == 11){
        //Prints to the results link that it was a loss game or not
        document.getElementById("crapsRes").innerHTML = "Craps, You lose!!!";
        // if the game is a loss it adds to the loss counter
        losses = losses + 1;
        //A test to see if was doubles and an even number
    } else if(die1 == die2 && die1 % 2 == 0){
        //It prints to a resualt of a win
        document.getElementById("crapsRes").innerHTML = "Congratulations, You win!!!";
        //it adds one to wins
        wins = wins + 1;
    }else {
        //it prints to a reualt of a tie
        document.getElementById("crapsRes").innerHTML = "You've Tied, Roll again.";
        //it adds one to the ties counter if a ties happens
        ties = ties + 1;
    }
    //it updates the win results
    document.getElementById("winRes").innerHTML = wins;
    //updates the losses results
    document.getElementById("lossRes").innerHTML = losses;
    //updates the tie results
    document.getElementById("tieRes").innerHTML = ties;
}