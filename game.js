let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#usersc");
const compScorePara = document.querySelector("#compsc");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log(userChoice);
  console.log(compChoice);
  if (userChoice === compChoice) {
    
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});














/*let userscore=0;
let compscore=0;

let usersc=document.querySelector("#usersc");
let compsc=document.querySelector("#compsc");
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const gencompchoice=()=>{
    const compchoice=[["rock"],["paper"],["scissor"]];
    const ch=Math.floor(Math.random()*3);
    return compchoice[ch];
};



 const playgame=(userChoice)=>{
    console.log(userChoice);
    const compchoice=gencompchoice();
    console.log(compchoice);
    if(userChoice === compchoice){
        drawGame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compchoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            userwin=(compchoice==="scissor" ? false : true);
        }else if(userChoice==="scissor"){
            userwin=compchoice==="rock"? false : true;
        }
        showWinner(userwin);
    }
    

 };


const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };
  


const showWinner=(userwin)=>{
    if(userwin){
        msg.innerText="You Won";
    }else{
        msg.innerText="Computer Won";
    }

};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });

}
);
*/