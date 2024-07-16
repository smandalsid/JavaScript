let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genchoice = () => {
    const options = ["rock", "paper", "scissor"];
    let rand = Math.floor(Math.random() * 3);
    return options[rand];
};

const drawgame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor="#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        console.log("User won");
        msg.innerText =`User Won, User choice: ${userchoice} Computer choice: ${compchoice}`;
        msg.style.backgroundColor="green";

    } else {
        console.log("Computer won");
        msg.innerText = `Computer Won, User choice: ${userchoice} Computer choice: ${compchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame = (userchoice) => {
    compchoice = genchoice(userchoice);
    console.log(`User choice: ${userchoice} Comp choice: ${compchoice}`);
    let userwin = true;
    if (compchoice == userchoice) {
        drawgame();
    } else {
        if (userchoice == "rock") {
            if (compchoice == "scissor") {
                userscore += 1;
                document.querySelector("#user-score").innerText=userscore;
                userwin = true;
            } else {
                compscore += 1;
                document.querySelector("#comp-score").innerText=compscore;
                userwin = false;
            }
        } else if (userchoice == "paper") {
            if (compchoice == "rock") {
                userscore += 1;
                document.querySelector("#user-score").innerText=userscore;
                userwin = true;
            } else {
                compscore += 1;
                document.querySelector("#comp-score").innerText=compscore;
                userwin = false;
            }
        } else {
            if (compchoice == "paper") {
                userscore += 1;
                document.querySelector("#user-score").innerText=userscore;
                userwin = true;
            } else {
                compscore += 1;
                document.querySelector("#comp-score").innerText=compscore;
                userwin = false;
            }
        }
        showwinner(userwin, userchoice, compchoice);
    }
    console.log(`User score: ${userscore} Computer score: ${compscore}`);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.id;
        playgame(userchoice);
    });
});