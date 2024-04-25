let user_score=0;
let comp_score=0;

const choices= document.querySelectorAll(".choices");
const userscore = document.querySelector("#me");
const compscore = document.querySelector("#comp");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

function drawGame(){
  msg.innerText ="Game was Draw. Play again";
  msg.style.backgroundColor = "#081b31";
}

const showUser=(userWin,_userChoice,compChoice)=>{
    if(userWin){
        user_score++;
        userscore.innerText=user_score;
        msg.innerText='You win!';
        msg.style.backgroundColor = "green";
    }
    else{
        comp_score++;
        console.log(compChoice)
        compscore.innerText=comp_score;
        msg.innerText="Computer win"; 
        msg.style.backgroundColor = "red";

    }
}
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else{
        if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else
        userWin=compChoice==="rock"?false:true;
    }
    // Add logic for determining the winner here
    showUser(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("Choice was clicked:", choice);
    playGame(userChoice);
  });
});
