let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
generateTarget = () =>{
 return Math.floor(Math.random()*10)
  }

  compareGuesses = (humanguess, computerguess, targetnumber) => {
    var humandistance = Math.abs(targetnumber - humanguess)
    var computerdistance = Math.abs(targetnumber - computerguess) 
    if (humandistance < computerdistance || humandistance == computerdistance) 
      {
        return true;
      }
      else 
      {
        return false;
      }
     
  }

updateScore = (winner) =>{
  if (winner == 'human'){
    humanScore++
  }
  else {
    computerScore++
  }

}

advanceRound = () =>{
  currentRoundNumber++
}


updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);
