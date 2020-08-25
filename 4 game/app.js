/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying, previousDice, winValue;
winValue = 100;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
            //generate a random dice
    var dice = Math.floor(Math.random() * 6)+ 1;

    if(previousDice === 6 && dice ===6){

    }
    

    //change a photo based on a dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = " block";
    diceDOM.src = "dice-"+ dice +".png";

    //update round score if dice is not 1
    if (previousDice === 6 && dice ===6) {
        scores[activePlayer] = 0;
        roundScore = 0;
        nextPlayer();

    } else if (dice  !== 1){
        //add to round score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        //change to next player
        nextPlayer();
       } 
       previousDice = dice;
    }
})
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //check if the player win
        if(scores[activePlayer] >= winValue){
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = "none";
            document.querySelector(".player-"+ activePlayer +"-panel").classList.add('winner');
            document.querySelector(".player-"+ activePlayer +"-panel").classList.remove('active');
            gamePlaying = false;
        } else {
             //next player
            nextPlayer();
        }
    }
})
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = "0";
    document.querySelector('#current-1').textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
    
    document.querySelector('.dice').style.display = "none";
}
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = "none";

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');
}
// document.querySelector('.btn').addEventListener('click',function(){
//     var maxValue = document.querySelector('.input').value;
//     maxValue = parseInt(maxValue);
//     if(maxValue){
//         winValue = maxValue;
//         console.log(maxValue);
//     }
// })