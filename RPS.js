//function getComputerChoice
function getComputerChoice(){
    // Get a random number 1 and 3 
    let compChoice = Math.floor(Math.random() * 3) + 1;
        // If the computer chooses 1 return "rock"
        if(compChoice === 1){
            return 'rock'
        }else if(compChoice === 2){
              // if the computer chooses 2 return "paper"
            return 'paper'
        }else if(compChoice === 3){
            return 'scissors'
            // if the computer chooses 3 return "scissors"
        }
}

function getHumanChoice(){
    //Get Human Choice as lower case value
    let humanChoice = prompt("Rock, Paper, or Scissors").toLowerCase();
    //if Human Choice equals rock, paper, or scissors return rock, paper or scissors
    if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
        return humanChoice;
    }else{
        // if it does not equal rock paper or scissors recall the getHumanChoice Function
       return humanChoice = getHumanChoice().toLowerCase();
    }
}



function playGame(){
// store the score
let humanScore = 0;
let computerScore = 0;

    function outcome(message, status, player){
        if(player){
            humanScore += 1;
        }else{
            computerScore += 1
        }
        console.log(`${message} You ${status}! Computer: ${computerScore} You: ${humanScore}`)
    }

    function playRound(){
        // execute and store human choice
        const human = getHumanChoice();
        // execute and store computer choice
        const computer = getComputerChoice();
        console.log(`the computer chose ${computer} and you choose ${human}`);
        //if computer choice is rock
        if(computer === 'rock'){
            if(human === computer){
                // if user choice is rock
                // its a tie no score added
                console.log('its a tie');
            }else if(human === 'paper'){
                 // if user choice is paper
                // paper beats rock 
                outcome('paper beats rock!', 'Won', true);
            }else if(human === 'scissors'){
                //if user choice is scissors
                // rock beats scissors
                outcome('Rock beats Scissors!', 'Lost');
            } 
        // if computer choice is paper        
        }else if(computer ==='paper'){
            if(human === computer){
                 // if user choice is paper
                // its a tie no score added
                console.log('its a tie!')
            }else if(human === 'rock'){
            // if user choice is rock
                // paper beats rock
                outcome('Paper beats rock!', 'Lost');
            }else if(human === 'scissors'){
                //if user choice is scissors
                // scissors beats paper
                outcome('Scissors beats Paper!', 'Won', true);
            }
        // if computer choice is scissors
        } else if(computer === 'scissors'){
            if(human === computer){
                //if user choice is scissors
                // its a tie no score add   
                console.log("its a tie");    
            }else if(human === "rock"){
                 // if user choice is rock
                // rock beats scissors
                outcome('Rock beats scissors!', 'Won', true);
            }else if(human === "paper"){
                 // if user choice is paper
                // scissors beats paper
                outcome('Scissors beats paper!', 'Lost');
            }
          
        }
    
    }

    for(let i=0; i<=5; i++){
        playRound();
        if(i >= 5){
            console.log(`Round Score: Computer ${computerScore}, You ${humanScore}`)
        }
    }


}














