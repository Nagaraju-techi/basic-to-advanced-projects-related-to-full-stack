let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const computerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame = () => {
    console.log("game was drawn");
    msg.innerText = "Game was drawn!";
    msg.style.color = "orange";
};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win");
        msg.innerText = "🎉 You Won!";
        msg.style.color = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        console.log("you lost");
        msg.innerText = "❌ You Lost, Computer Won!";
        msg.style.color = "red";
    }
};

const playgame = (userid) => {
    console.log("user choice= ", userid);
    const compchoice = computerchoice();
    console.log("computer choice=", compchoice);

    if (userid === compchoice) {
        drawgame();
        return; // ✅ stop here to avoid calling showwinner again
    }

    let userwin;
    if (userid === "rock") {
        userwin = compchoice === "paper" ? false : true;
    } else if (userid === "paper") {
        userwin = compchoice === "scissors" ? false : true;
    } else {
        userwin = compchoice === "rock" ? false : true;
    }

    showwinner(userwin);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userid = choice.getAttribute("id");
        console.log("choice was clicked successfully", userid);
        playgame(userid);
    });
});
