/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,RoundScores,workingPlayer,gameState;
var lastValue;
starGame()
//diceBall=Math.floor(Math.random()*6)+1;

//document.querySelector('#current-'+workingPlayer).textContent=diceBall;
//document.querySelector('#current-0').innerHTML='<em>'+diceBall+'</em>';

//var x = document.querySelector('#score-0').textContent;


document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gameState)
    {
        var  diceBall=Math.floor(Math.random()*6)+1;
        var domeElement=document.querySelector('.dice');
        domeElement.style.display='block';
        domeElement.src='dice-'+ diceBall +'.png';
    if(diceBall===6 && lastValue===6){
               scores[workingPlayer]=0;
               document.querySelector('#score-' +workingPlayer).textContent='0';
               nextworking();

    }
    
        else if( diceBall !==1)
        {
            RoundScores+=diceBall;
            document.getElementById('current-'+ workingPlayer).textContent=RoundScores;
    
        }
    
        else{
           nextworking();
        }
        lastValue=diceBall;
    }


  
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameState)

{
    scores[workingPlayer]+=RoundScores;

    document.querySelector('#score-' +workingPlayer).textContent=scores[workingPlayer];
    var winScore=document.querySelector('.find-class').value;
    var winnerValue
    if(winScore)
    {
        winnerValue=winScore;
    }
    else{
        winnerValue=100;
    }

    if(scores[workingPlayer] >=winnerValue)
    {
        document.querySelector('#name-'+workingPlayer).textContent="winner!!!";
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+workingPlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+workingPlayer+'-panel').classList.remove('active');
        gameState=false;        
    }

    else{
        nextworking();
    }
}

   

   

});

function nextworking(){
    workingPlayer===0?workingPlayer=1:workingPlayer=0;
    
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',starGame);

function starGame()
{
 

    scores=[0,0];
    RoundScores=0;
    workingPlayer=0;  
    gameState=true;  


document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.querySelector('#name-0').textContent="Player 1";
document.querySelector('#name-1').textContent="Player 2";

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');  

document.querySelector('.player-0-panel').classList.add('active');

}