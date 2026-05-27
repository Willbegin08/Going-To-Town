"use strict";
let $$ = (sel) => document.querySelector(sel);

//selectors
let currentRound = $$("#currentRound");
let roundAmount = $$("#roundAmount")
let confirmBtn = $$("#confirm")
let totalRounds = $$("#totalRounds");
let nextBtn = $$("#nextBtn");
let currentPlayer = $$("#currentPlayer");
let rollsRemaining = $$("#rollsRemaining");
let humanScore = $$("#humanScore");
let computerScore = $$("#computerScore");
let gameMessage = $$("#gameMessage");
let rollBtn = $$("#rollBtn");
let gameSection = $$("#gameSection");
let gameForm = $$("#gameForm");
let gameEnd = $$("#gameEnd");
let winnerName = $$("#winnerName");
let loserName = $$("#loserName");
let winnerScore = $$("#winnerScore");
let loserScore = $$("#loserScore");




class Player {
    #firstName;
    #lastName;
    #nickname;
    #phoneNumber;
    #city;
    #email;
    #score;

    constructor(firstName, lastName, nickname, phoneNumber, city, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#nickname = nickname;
        this.#phoneNumber = phoneNumber;
        this.#city = city;
        this.#email = email;
        this.#score = 0;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(firstName) {
        this.#firstName = firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(lastName) {
        this.#lastName = lastName;
    }
    get nickname() {
        return this.#nickname;
    }

    set nickname(nickname) {
        this.#nickname = nickname;
    }

    get phoneNumber() {
        return this.#phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        this.#phoneNumber = phoneNumber;
    }

    get city() {
        return this.#city;
    }

    set city(city) {
        this.#city = city;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get score() {
        return this.#score;
    }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    addScore(points) {
        if (points < 0) {
            return "points must be non-negative";
        }
        this.#score += points;
    }

    resetScore() {
        this.#score = 0;
    }
}

class Dice {
    #min = 1
    #max = 6


    dieRoll() {
        return Math.floor(Math.random() * (this.#max - this.#min + 1)) + this.#min;
    }

    diceRoll(amount) {
        if (amount < 1 || amount > 3) {
            return "amount must be 1,2, or 3";
        }
        const rolls = [];
        for (let i = 0; i < amount; i++) {
            rolls.push(this.dieRoll());
        }
        return rolls;
    }

    keepHighest(rolls) {
        return Math.max(...rolls);
    }
}

class Game {
    #human
    #computer
    #dice
    #rounds

    //turn elements
    #currentPlayer
    #round
    #turnOver = false;
    #diceRollsAmount
    #keptValue = []
    #lastRollValues = []
    constructor(human, computer, dice = new Dice()) {
        this.#human = human;
        this.#computer = computer;
        this.#dice = dice;
        this.#rounds = 1;
    }

    get rounds() {
        return this.#rounds;
    }

    setRounds(roundNum) {
        if (roundNum <= 0) {
            return "The number of rounds must be greater than 0";
        } else if (roundNum > 20) {
            return "The number of rounds cannot be greater than 20";
        }
        this.#rounds = roundNum;
    }

    startGame() {
        this.#human.resetScore();
        this.#computer.resetScore();
        this.#round = 1
        this.#currentPlayer = this.#human;
        this.startTurn();
    }

    startTurn() {
        this.#diceRollsAmount = 3;
        // rollsRemaining.textContent = this.#diceRollsAmount;
        this.#keptValue = [];
        this.#lastRollValues = [];
        this.#turnOver = false;
    }

    advanceTurn() {
        if (this.#turnOver) {
            return "The turn is already over"
        }

        const count = this.#diceRollsAmount;
        this.#lastRollValues = this.#dice.diceRoll(count);

        const keptNumber = Math.max(...this.#lastRollValues);
        this.#keptValue.push(keptNumber);

        this.#diceRollsAmount--;

        if (this.#diceRollsAmount === 0) {
            this.endTurn();
        }

        return {
            player: this.#currentPlayer.getFullName(),
            rolled: [...this.#lastRollValues],
            kept: keptNumber,
            keptSoFar: [...this.#keptValue],
            rollsRemaining: this.#diceRollsAmount
        };
    }

    endTurn() {
        const turnPoints = this.#keptValue.reduce((a, b) => a + b, 0);
        this.#currentPlayer.addScore(turnPoints);
        this.#turnOver = true;

        return {
            player: this.#currentPlayer.getFullName(),
            turnPoints
        };
    }

    nextTurnOrRound() {
        if (!this.#turnOver) {
            return "Finish the turn first";
        }

        if (this.#currentPlayer === this.#human) {
            this.#currentPlayer = this.#computer;
            this.startTurn();
            return {
                type: "nextTurn",
                player: this.#currentPlayer.getFullName(),
                round: this.#round
            };
        }

        if (this.#round < this.#rounds) {
            this.#round++;
            this.#currentPlayer = this.#human;
            this.startTurn();
            return {
                type: "nextRound",
                player: this.#currentPlayer.getFullName(),
                round: this.#round
            };
        }

        return {
            type: "gameOver",
            winner: this.getWinnerName(),
            loser: this.getLoserName()
        };
    }

    getWinnerName() {
        if (this.#human.score > this.#computer.score) {
            return this.#human.getFullName();
        }
        if (this.#computer.score > this.#human.score) {
            return this.#computer.getFullName();
        }
        return "Tie";
    }

    getLoserName() {
        if (this.#human.score < this.#computer.score) {
            return this.#human.getFullName();
        }
        if (this.#computer.score < this.#human.score) {
            return this.#computer.getFullName();
        }
        return "Tie";
    }

    getState() {
        return {
            round: this.#round,
            roundsTotal: this.#rounds,
            currentPlayer: this.#currentPlayer.getFullName(),
            diceRollsAmount: this.#diceRollsAmount,
            keptValue: [...this.#keptValue],
            lastRollValues: this.#lastRollValues,
            humanScore: this.#human.score,
            computerScore: this.#computer.score,
            turnOver: this.#turnOver
        };
    }
}

$$("#displayFirstName").textContent = localStorage.getItem("firstName");
$$("#displayLastName").textContent = localStorage.getItem("lastName");
$$("#displayUsername").textContent = localStorage.getItem("username");
$$("#displayPhone").textContent = localStorage.getItem("phoneNumber");
$$("#displayCity").textContent = localStorage.getItem("city");
$$("#displayEmail").textContent = localStorage.getItem("email");

const lastVisit = localStorage.getItem("lastVisit");
if (lastVisit !== null) {
    $$("#displayLastVisit").textContent = `Your last visit was ${lastVisit}`;
} else {
    $$("#displayLastVisit").textContent = `This is your first visit!`;
}

localStorage.setItem("lastVisit", new Date().toUTCString());

$$("#notUserText").textContent = `Not ${localStorage.getItem("firstName")} ${localStorage.getItem("lastName")}?`
const requiredKeys = ["firstName", "lastName", "username", "phoneNumber", "city", "email", "lastVisit"];
$$("#changeCredentials").onclick = (e) => {
    e.preventDefault();
    requiredKeys.forEach(key => localStorage.removeItem(key));
    window.location.href = "intro.html";
}

function roundStartAnimation() {
    const starIcon = "✨"
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const star = document.createElement("span");
            star.classList.add("star");
            star.textContent = starIcon;
            star.style.bottom = "0";
            star.style.left = `${Math.random() * 90 + 5}%`;
            const drift = (Math.random() - 0.5) * 200;
            star.style.setProperty("--drift", drift);
            star.style.animation = `none`;
            document.body.appendChild(star);

            requestAnimationFrame(() => {
                star.style.transition = "transform 1s ease-out, opacity 1s ease-out";
                star.style.transform = `translateX(${drift}px) translateY(-100vh)`;
                star.style.opacity = "0";
            });

            setTimeout(() => star.remove(), 1100);
        }, i * 120);
    }
}


function validateRounds() {
    let roundsError = $$("#roundsError");
    roundsError.textContent = "";
    if (roundAmount.value === "" || roundAmount.value > 20 || roundAmount.value < 1) {
        roundsError.textContent = "Please enter a number from 1-20";
        roundAmount.classList.add("errorBox")
        return false;
    }
    roundAmount.classList.remove("errorBox");
    game.setRounds(roundAmount.value);
    totalRounds.textContent = game.rounds;
    game.startGame();

    const state = game.getState();
    totalRounds.textContent = state.roundsTotal;
    currentPlayer.textContent = state.currentPlayer;
    humanScore.textContent = state.humanScore;
    computerScore.textContent = state.computerScore;
    currentRound.textContent = state.round;

    gameForm.classList.add("hide");
    gameSection.classList.remove("hide");
    roundStartAnimation();
    return true;
}

confirmBtn.onclick = validateRounds;
//Game code
const player1 = new Player(localStorage.getItem("firstName"), localStorage.getItem("lastName"), localStorage.getItem("username"), localStorage.getItem("phoneNumber"), localStorage.getItem("city"), localStorage.getItem("email"));
const computer = new Player("computer", "ai", "cpu", "", "", "");
const dice = new Dice();
const game = new Game(player1, computer, dice);


const dieUnicode = {
    1: "&#9856",
    2: "&#9857",
    3: "&#9858",
    4: "&#9859",
    5: "&#9860",
    6: "&#9861"
}

function updateDisplay(result) {
    const diceArr = ["die1", "die2", "die3"];
    diceArr.forEach((id, i) => {
        const el = $$("#" + id);
        if (result.rolled[i] !== undefined) {
            el.classList.remove("rolling");
            el.offsetWidth;
            el.innerHTML = dieUnicode[result.rolled[i]];
            el.classList.add("rolling");
            el.classList.remove("hide");
        } else {
            el.classList.add("hide");
        }
    })

    $$("#lastRoll").textContent = result.rolled.join(", ");
    $$("#keptSoFar").innerHTML = result.keptSoFar.join(", ");
    rollsRemaining.textContent = result.rollsRemaining;
}
rollBtn.onclick = () => {
    const result = game.advanceTurn();
    if (typeof result === "string") {
        gameMessage.textContent = result;
        return;
    }

    updateDisplay(result);

    if (result.rollsRemaining === 0) {
        const state = game.getState();
        humanScore.textContent = state.humanScore;
        computerScore.textContent = state.computerScore;
        nextBtn.classList.add("activateBtn");
    }
};

function computerTurn() {
    rollBtn.disabled = true;
    nextBtn.disabled = true;
    gameMessage.textContent = "Computer is playing...";

    while (true) {
        const result = game.advanceTurn();

        if (typeof result === "string") break;

        updateDisplay(result);

        if (result.rollsRemaining === 0) {
            const state = game.getState();
            humanScore.textContent = state.humanScore;
            computerScore.textContent = state.computerScore;
            gameMessage.textContent = "Computer finished its turn.";
            rollBtn.disabled = false;
            nextBtn.disabled = false;

            const next = game.nextTurnOrRound();
            if (next.type === "gameOver") {
                winnerName.textContent = next.winner;
                loserName.textContent = next.loser;
                winnerScore.textContent = state.humanScore > state.computerScore ? state.humanScore : state.computerScore;
                loserScore.textContent = state.humanScore < state.computerScore ? state.humanScore : state.computerScore;

                gameMessage.classList.add("winMessage");
                gameMessage.textContent = state.humanScore > state.computerScore ? "🏆 You Win!" : state.humanScore < state.computerScore ? "💀 Computer Wins!" : "🤝 It's a Tie!";
                gameSection.classList.add("winFlash");

                setTimeout(() => {
                    gameSection.classList.add("hide");
                    gameSection.classList.remove("winFlash");
                    gameEnd.classList.remove("hide");
                }, 2500);
            } else {
                currentPlayer.textContent = next.player;
                currentRound.textContent = next.round;
                if (next.type === "nextRound") {
                    roundStartAnimation();
                }
            }
            break;
        }
    }
}

nextBtn.onclick = () => {
    const result = game.nextTurnOrRound();
    if (typeof result === "string") {
        gameMessage.textContent = result;
        return;
    }

    if (result.type === "gameOver") {
        const state = game.getState();
        winnerName.textContent = result.winner;
        loserName.textContent = result.loser;
        winnerScore.textContent = state.humanScore > state.computerScore ? state.humanScore : state.computerScore;
        loserScore.textContent = state.humanScore < state.computerScore ? state.humanScore : state.computerScore;

        gameMessage.classList.add("winMessage");
        gameMessage.textContent = state.humanScore > state.computerScore ? "🏆 You Win!" : state.humanScore < state.computerScore ? "💀 Computer Wins!" : "🤝 It's a Tie!";
        gameSection.classList.add("winFlash");

        setTimeout(() => {
            gameSection.classList.add("hide");
            gameSection.classList.remove("winFlash");
            gameEnd.classList.remove("hide");
        }, 2500);
        return;
    }

    currentPlayer.textContent = result.player;
    currentRound.textContent = result.round;

    if (result.type === "nextRound") {
        roundStartAnimation();
    }

    if (result.player === computer.getFullName()) {
        computerTurn();
    }

    //change to green when turn is ended
    nextBtn.classList.remove("activateBtn");
}

function showLeave() {
    const state = game.getState();
    gameForm.classList.add("hide");
    gameSection.classList.add("hide");
    $$("#gameLeave").classList.remove("hide");
    $$("#leavePlayerName").textContent = localStorage.getItem("firstName");
    $$("#leaveHumanName").textContent = player1.getFullName();
    $$("#leaveHumanScore").textContent = state.humanScore;
    $$("#leaveComputerScore").textContent = state.computerScore;
}

$$("#leaveBtn").onclick = showLeave;

window.onerror = () => {
    document.body.innerHTML = '<p id="errorMessage">An unexpected error occurred. Restarting...</p>';
    setTimeout(() => window.location.href = "intro.html", 2500);
    return true;
};