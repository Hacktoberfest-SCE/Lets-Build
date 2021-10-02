const choicesAvail = ["paper", "rock", "scissors"];
const icons = document.querySelectorAll(".icons");
const scoreText = document.getElementsByClassName("score-text")[0];
const playAgain = document.getElementById("play-again");
const playAgn = document.querySelector(".playAgain-btn");


let score = 0;
var started = true;
var cond;


icons.forEach( icons => {
    const userChoice = icons.getAttribute("data-choice");
    const compChoice = choicesAvail[Math.floor(Math.random() * 3)];
    icons.addEventListener("click", () => {
        console.log(userChoice);
        console.log(compChoice);
        showUserChoice(userChoice);
        showCompChoice(compChoice);

        if (userChoice === compChoice)
        {
            cond = "DRAW!";
        } 
        else if ((userChoice === "paper" && compChoice === "rock") || 
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "paper"))
        {
            
            cond = "YOU LOOSE!";
            updateScore(-1);
        } 
        else 
        {
            cond = "YOU WON!";
            updateScore(1);
        }
        showWinner(cond);
    })

})


function showWinner(cond){

    document.querySelector("#play-again-text").innerHTML = "" + cond;
    setTimeout(function(){
        playAgain.classList.remove("none");
    }, 2000);
}

function updateScore(value){
    score += value;
    scoreText.textContent = score;
    setTimeout(function(){
        document.querySelector(".score-text").innerHTML = score;
    }, 2000);
}

function showUserChoice(userChoice){
    document.querySelector(".circles").classList.add("none");
    document.getElementById("icon-paper").classList.add("icon-" + userChoice);
    document.getElementById("user-choice-img").setAttribute("src", "./images/icon-" + userChoice + ".svg");
    document.querySelector(".choices1").classList.remove("none");
    

}
function showCompChoice(compChoice){
    document.querySelector(".choices2").classList.remove("none");

    setTimeout(function(){
        document.querySelector(".choices2").classList.add("none");
        document.querySelector(".comp-choice").classList.remove("none");
        document.getElementById("comp-icon").classList.add("icon-" + compChoice);
        document.getElementById("comp-choice-img").setAttribute("src", "./images/icon-" + compChoice + ".svg");
    }, 1000);
}


document.querySelector(".rules-btn").addEventListener("click", function(){
    toggleRules();
})
document.querySelector(".close-btn").addEventListener("click", function(){
    toggleRules();
})

function toggleRules(){
    document.querySelector(".rules-popup").classList.toggle("flex");
}


playAgn.addEventListener("click", function(){
    playAgain.classList.add("none");
    document.querySelector(".comp-choice").classList.add("none");
    document.querySelector(".choices1").classList.add("none");
    document.querySelector(".circles").classList.remove("none");
})


// function playAgain(){
    
// }

// function restart(){

// }
