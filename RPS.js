
// Game rules 
    // Rock Beats Scissors
    // Scissors Beats Paper
    // Paper Beats Rock


//function getComputerChoice
function getComputerChoice(){
    // Get a random number 1 and 3 
    let compChoice = Math.floor(Math.random() * 3) + 1;
    console.log(compChoice);
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
            humanScore += 1;
            console.log(`paper beats rock! You Won! Computer: ${computerScore} You: ${humanScore}`)
        }else if(human === 'scissors'){
            //if user choice is scissors
            // rock beats scissors
            computerScore +=1;
            console.log(`Rock beats Scissors! You Lost! Computer: ${computerScore} You: ${humanScore}`)
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
            computerScore +=1;
            console.log(`Paper beats rock! You Lost! Computer: ${computerScore} You: ${humanScore}`)
        }else if(human === 'scissors'){
            //if user choice is scissors
            // scissors beats paper
            humanScore +=1;
            console.log(`Scissors beats Paper! You Won! Computer: ${computerScore} You: ${humanScore}`)
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
            humanScore +=1;
            console.log(`Rock beats scissors! You Won! Computer: ${computerScore} You: ${humanScore}`)

        }else if(human === "paper"){
             // if user choice is paper
            // scissors beats paper
            computerScore +=1;
            console.log(`Scissors beats paper! You Lost! Computer: ${computerScore} You: ${humanScore}`)
        }
      
    }

}

function playGame(){
    for(let i=0; i<=5; i++){
        playRound();
        if(i >= 5){
            console.log(`Round Score: Computer ${computerScore}, You ${humanScore}`)
        }
    }
}

let humanScore = 0;
let computerScore = 0;











// store the result of the choice

//
