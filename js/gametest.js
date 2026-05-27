"use strict";


(function() {
    const player1 = new Player("William", "Parisien-Begin", "Player1" , "819-967-2335", "Gatineau", "player@gmail.com");

    console.log("---Player Tests---");
    if(player1.firstName === "William") {
        console.log(`Player Test 1 passed: constructor sets first name correctly`);
    }else {
        console.assert(player1.firstName === "William", `Player Test 1 Failed : expected "William" but got ${player1.firstName}`);
    }

    if(player1.lastName === "Parisien-Begin") {
        console.log(`Player Test 2 passed: constructor sets last name correctly`);
    }else {
        console.assert(player1.lastName === "Parisien-Begin", `Player Test 2 Failed : expected "Parisien-Begin" but got ${player1.lastName}`);
    }

    if(player1.nickname === "Player1") {
        console.log(`Player Test 3 passed: constructor sets nickname correctly`);
    }else {
        console.assert(player1.nickname === "Player1", `Player Test 3 Failed : Expected "Player1" but got ${player1.nickname}`);
    }

    if(player1.phoneNumber === "819-967-2335") {
        console.log(`Player Test 4 passed: constructor sets phoneNumber correctly`);
    }else {
        console.assert(player1.phoneNumber === "819-967-2335", `Player Test 4 Failed : Expected "819-967-2335" but got ${player1.phoneNumber}`);
    }

    if(player1.city === "Gatineau") {
        console.log(`Player Test 5 passed: constructor sets city correctly`);
    }else {
        console.assert(player1.city === "Gatineau", `Player Test 5 Failed : Expected "Gatineau" but got ${player1.city}`);
    }

    if(player1.email === "player@gmail.com") {
        console.log(`Player Test 6 passed: constructor sets email correctly`);
    }else {
        console.assert(player1.email === "player@gmail.com", `Player Test 6 Failed : Expected "player@gmail.com" but got ${player1.email}`);
    }

    player1.firstName = "John";
    if(player1.firstName === "John") {
        console.log(`Player Test 7 passed: setter assigns first name correctly`);
    }else {
        console.assert(player1.firstName === "John", `Player Test 7 Failed : Expected "John" but got ${player1.firstName}`);
    }

    player1.lastName = "Doe";
    if(player1.lastName === "Doe") {
        console.log(`Player Test 8 passed: setter assigns last name correctly`);
    }else {
        console.assert(player1.lastName === "Doe", `Player Test 8 Failed : Expected "Doe" but got ${player1.lastName}`);
    }

    player1.nickname = "Johnny Doe";
    if(player1.nickname === "Johnny Doe") {
        console.log(`Player Test 9 passed: setter assigns nickname correctly`);
    }else {
        console.assert(player1.nickname === "Johnny Doe", `Player Test 9 failed " Expected "Johnny Doe" but got ${player1.nickname}`);
    }

    player1.phoneNumber = "873-235-2456"
    if(player1.phoneNumber === "873-235-2456") {
        console.log(`Player Test 10 passed: setter assigns phone number correctly`);
    }else {
        console.assert(player1.phoneNumber === "873-235-2456", `Player Test 10 failed : Expected "873-235-2456" but got ${player1.phoneNumber}`);
    }

    player1.city = "Ottawa"
    if(player1.city === "Ottawa") {
        console.log(`Player Test 11 passed: setter assigns city correctly`);
    }else {
        console.assert(player1.city === "Ottawa", `Player Test 11 Failed : Expected "Ottawa" but got ${player1.city}`);
    }

    player1.email = "JohnDoe@gmail.com"
    if(player1.email === "JohnDoe@gmail.com") {
        console.log(`Player Test 12 passed: setter assigns email correctly`);
    }else {
        console.assert(player1.email === "JohnDoe@gmail.com", `Player Test 12 Failed : Expected JohnDoe@gmail.com but got ${player1.email}`);
    }

    if(player1.getFullName() === "John Doe") {
        console.log(`Player Test 13 passed : getFullName returns full name correctly`);
    }else {
        console.assert(player1.getFullName() === "John Doe", `Player Test 13 Failed : Expected "John Doe" but got ${player1.getFullName()}`);
    }

    player1.addScore(10);
    if(player1.score === 10) {
        console.log(`Player Test 14 passed : addScore adds the correct amount to the score`);
    }else {
        console.assert(player1.score === 10, `Test 14 Failed : Expected "10" and got ${player1.score}`);
    }

    if(player1.addScore(-2) === "points must be non-negative") {
        console.log(`Player Test 15 passed : addScore returns error message if points added are negative`);
    }else {
        console.assert(player1.addScore(-2) === "points must be non-negative", `Player Test 15 Failed : Expected "points must be non-negative" but got ${player1.score}`);
    }

    player1.resetScore();
    if(player1.score === 0) {
        console.log(`Player Test 16 passed : resetScore sets score to zero`);
    }else {
        console.assert(player1.score === 0, `Player Test 16 Failed : expected "0" but got ${player1.score}`);
    }

    console.log(" ");
}());

(function() {
    const dice = new Dice();
    console.log("---Dice Tests---");

    const roll = dice.dieRoll();
    if(roll >= 1 && roll <= 6) {
        console.log(`Dice Test 1 passed : dieRoll rolls a number from 1 - 6`);
    }else {
        console.assert(roll >= 1 && roll <= 6, `Dice Test 1 failed : expected a number from 1-6 but got ${roll}`)
    }

    const threeRolls = dice.diceRoll(3);
    if(Array.isArray(threeRolls) && threeRolls.length === 3) {
        console.log(`Dice Test 2 passed : diceRolls(3) returns an array with three numbers inside`);
    }else {
        console.assert(Array.isArray(threeRolls) && threeRolls.length === 3, `Dice Test 2 failed : Expected array with three numbers but got ${threeRolls}`);
    }

    const twoRolls = dice.diceRoll(2);
    if(Array.isArray(twoRolls) && twoRolls.length === 2) {
        console.log(`Dice Test 3 passed : diceRolls(2) returns an array with two numbers inside`);
    }else {
        console.assert(Array.isArray(twoRolls) && twoRolls.length === 2, `Dice Test 3 failed : Expected array with two numbers but got ${twoRolls}`);
    }

    const oneRoll = dice.diceRoll(1);
    if(Array.isArray(oneRoll) && oneRoll.length === 1) {
        console.log(`Dice Test 4 passed : diceRolls(1) returns an array with one number`);
    }else {
        console.assert(Array.isArray(oneRoll) && oneRoll.length === 1, `Dice Test 4 failed : Expected array with one number but got ${oneRoll}`);
    }

    const invalidRolls = dice.diceRoll(5);
    if(invalidRolls === "amount must be 1,2, or 3") {
        console.log(`Dice Test 5 passed : diceRolls with invalid number returns error message`);
    }else {
        console.assert(invalidRolls === "amount must be 1,2, or 3", `Dice Test 5 failed : Expected error message but got ${invalidRolls}`);
    }

    const rollArray = [2, 4, 6];
    const highest = dice.keepHighest(rollArray);
    if(highest === 6) {
        console.log(`Dice Test 6 passed : keepHighest return the highest number from the array`);
    }else {
        console.assert(highest === 6, `Dice Test 6 failed : expected "6" but got ${highest}`);
    }

    console.log(" ");
}());

(function() {
    const player1 = new Player("William", "Parisien-Begin", "Player1" , "819-967-2335", "Gatineau", "player@gmail.com");
    const computer = new Player("computer", "ai", "cpu", "", "", "");
    const dice = new Dice();
    const game = new Game(player1, computer, dice);
    console.log("---Game Tests---");

    if(game.rounds === 1) {
        console.log(`Game Test 1 passed : constructor sets rounds to one by default`);
    }else {
        console.assert(game.rounds === 1, `Game Test 1 failed : expected one but got ${game.rounds}`);
    }

    const validRounds = game.setRounds(12);
    if(game.rounds === 12) {
        console.log(`Game Test 2 passed : setRounds sets rounds correctly if number is in valid range`);
    }else {
        console.assert(game.rounds === 12, `Game test 2 failed : expected "12" but got ${game.rounds}`);
    }

    const lesserRounds = game.setRounds(0);
    if(lesserRounds === "The number of rounds must be greater than 0") {
        console.log(`Game Test 3 passed : setRounds With rounds under or equal to zero returns error message`);
    }else {
        console.assert(lesserRounds === "The number of rounds must be greater than 0", `Game Test 3 failed : expected error message but got ${lesserRounds}`);
    }

    const higherRounds = game.setRounds(21);
    if(higherRounds === "The number of rounds cannot be greater than 20") {
        console.log(`Game Test 4 passed : setRounds With rounds over twenty returns error message`);
    }else {
        console.assert(higherRounds === "The number of rounds cannot be greater than 20", `Game Test 4 failed : expected error message but got ${lesserRounds}`);
    }


    player1.addScore(10);
    computer.addScore(20);
    game.startGame();
    if(player1.score === 0 && computer.score === 0 && game.getState().round === 1 && game.getState().currentPlayer === "William Parisien-Begin") {
        console.log(`Game Test 5 passed : startGame rests scores, sets round to one, makes player the human`);
    }else {
        console.assert(player1.score === 0 && computer.score === 0 && game.getState().round === 1 && game.getState().currentPlayer === "William Parisien-Begin", `Game Test 5 failed : expected scores set to zero, round at one, and current player is human but got ${JSON.stringify(game.getState())}`);
    }

    if(game.getState().diceRollsAmount === 3 && game.getState().keptValue.length === 0 && game.getState().lastRollValues.length === 0 && game.getState().turnOver === false) {
        console.log(`Game Test 6 passed : startTurn sets dice rolls to three, empties keptValue and lastRollValues array, and sets turnOver to false`);
    }else {
        console.assert(game.getState().diceRollsAmount === 3 && game.getState().keptValue.length === 0 && game.getState().lastRollValues,length === 0 && game.getState().turnOver === false, `Game Test 6 failed : expected dice rolls to three, empty keptValue and lastRollValues array, and sets turnOver to false but got ${JSON.stringify(game.getState())}`);
    }

    const turn1 = game.advanceTurn();
    if (turn1.player === player1.getFullName() && turn1.rolled.length === 3 && turn1.kept === Math.max(...turn1.rolled) && turn1.keptSoFar.length === 1 && turn1.keptSoFar[0] === turn1.kept && turn1.rollsRemaining === 2) {
        console.log(`Game Test 7 passed : advanceTurn first phase rolls 3 dice, keeps highest value, and leaves 2 rolls remaining`);
    } else {
        console.assert(turn1.player === player1.getFullName() && turn1.rolled.length === 3 && turn1.kept === Math.max(...turn1.rolled) && turn1.keptSoFar.length === 1 && turn1.keptSoFar[0] === turn1.kept && turn1.rollsRemaining === 2, `Game Test 7 failed : expected first phase to roll 3 dice, keep highest, store one kept value, and leave 2 rolls remaining but got ${JSON.stringify(turn1)}`);
    }

    const turn2 = game.advanceTurn();
    if (turn2.player === player1.getFullName() && turn2.rolled.length === 2 && turn2.kept === Math.max(...turn2.rolled) && turn2.keptSoFar.length === 2 && turn2.keptSoFar[1] === turn2.kept && turn2.rollsRemaining === 1) {
        console.log(`Game Test 8 passed : advanceTurn second phase rolls 2 dice, keeps highest value, and leaves 1 roll remaining`);
    } else {
        console.assert(turn2.player === player1.getFullName() && turn2.rolled.length === 2 && turn2.kept === Math.max(...turn2.rolled) && turn2.keptSoFar.length === 2 && turn2.keptSoFar[1] === turn2.kept && turn2.rollsRemaining === 1, `Game Test 8 failed : expected second phase to roll 2 dice, keep highest, store two kept values, and leave 1 roll remaining but got ${JSON.stringify(turn2)}`);
    }

    const previousScore = player1.score;
    const turn3 = game.advanceTurn();
    if (turn3.player === player1.getFullName() && turn3.rolled.length === 1 && turn3.kept === turn3.rolled[0] && turn3.keptSoFar.length === 3 && turn3.keptSoFar[2] === turn3.kept && turn3.rollsRemaining === 0 && player1.score > previousScore) {
        console.log(`Game Test 9 passed : advanceTurn third phase rolls 1 die, keeps it, and calls endTurn that updates the score then sets turnOver to true`);
    } else {
        console.assert(turn3.player === player1.getFullName() && turn3.rolled.length === 1 && turn3.kept === turn3.rolled[0] && turn3.keptSoFar.length === 3 && turn3.keptSoFar[2] === turn3.kept && turn3.rollsRemaining === 0 && player1.score > previousScore, `Game Test 9 failed : expected third phase to roll 1 die, keep it, end the turn, and update the score but got ${JSON.stringify(turn3)} with player score ${player1.score}`);
    }

    const turn4 = game.advanceTurn();
    if (turn4 === "The turn is already over") {
        console.log(`Game Test 10 passed : advanceTurn returns message when the turn is already over`);
    } else {
        console.assert(turn4 === "The turn is already over", `Game Test 10 failed : expected "The turn is already over" but got ${JSON.stringify(turn4)}`);
    }

    game.startGame();
    const next1 = game.nextTurnOrRound();
    if (next1 === "Finish the turn first") {
        console.log(`Game Test 11 passed : nextTurnOrRound returns message if turn is not over`);
    } else {
        console.assert(next1 === "Finish the turn first", `Game Test 11 failed : expected "Finish the turn first" but got ${JSON.stringify(next1)}`);
    }

    game.advanceTurn();
    game.advanceTurn();
    game.advanceTurn();
    const next2 = game.nextTurnOrRound();
    if (next2.type === "nextTurn" && next2.player === computer.getFullName() && next2.round === 1 && game.getState().currentPlayer === computer.getFullName() && game.getState().diceRollsAmount === 3 && game.getState().turnOver === false) {
        console.log(`Game Test 12 passed : nextTurnOrRound switches from human to computer and starts a new turn`);
    } else {
        console.assert(next2.type === "nextTurn" && next2.player === computer.getFullName() && next2.round === 1 && game.getState().currentPlayer === computer.getFullName() && game.getState().diceRollsAmount === 3 && game.getState().turnOver === false, `Game Test 12 failed : expected nextTurn to computer on round 1 with a fresh turn but got ${JSON.stringify(next2)}`);
    }

    game.setRounds(2);
    game.startGame();
    game.advanceTurn();
    game.advanceTurn();
    game.advanceTurn();
    game.nextTurnOrRound();
    game.advanceTurn();
    game.advanceTurn();
    game.advanceTurn();
    const next3 = game.nextTurnOrRound();
    if (next3.type === "nextRound" && next3.player === player1.getFullName() && next3.round === 2 && game.getState().currentPlayer === player1.getFullName() && game.getState().round === 2 && game.getState().diceRollsAmount === 3 && game.getState().turnOver === false) {
        console.log(`Game Test 13 passed : nextTurnOrRound moves to the next round and switches back to the human`);
    } else {
        console.assert(next3.type === "nextRound" && next3.player === player1.getFullName() && next3.round === 2 && game.getState().currentPlayer === player1.getFullName() && game.getState().round === 2 && game.getState().diceRollsAmount === 3 && game.getState().turnOver === false, `Game Test 13 failed : expected nextRound to human on round 2 with a fresh turn but got ${JSON.stringify(next3)}`);
    }

    game.setRounds(1);
    game.startGame();
    game.advanceTurn();
    game.advanceTurn();
    game.advanceTurn();
    game.nextTurnOrRound();
    game.advanceTurn();
    game.advanceTurn();
    game.advanceTurn();
    player1.addScore(5);
    const next4 = game.nextTurnOrRound();
    if (next4.type === "gameOver" && next4.winner && next4.loser && next4.winner !== next4.loser) {
        console.log(`Game Test 14 passed : nextTurnOrRound returns gameOver with winner and loser after the final turn`);
    } else {
        console.assert(next4.type === "gameOver" && next4.winner && next4.loser && next4.winner !== next4.loser, `Game Test 14 failed : expected gameOver with winner and loser but got ${JSON.stringify(next4)}`);
    }

    player1.resetScore();
    computer.resetScore();
    player1.addScore(20);
    computer.addScore(10);
    const winner1 = game.getWinnerName();
    if (winner1 === player1.getFullName()) {
        console.log(`Game Test 15 passed : getWinnerName returns the human when the human has a higher score`);
    } else {
        console.assert(winner1 === player1.getFullName(), `Game Test 15 failed : expected ${player1.getFullName()} but got ${winner1}`);
    }

    player1.resetScore();
    computer.resetScore();
    player1.addScore(5);
    computer.addScore(25);
    const winner2 = game.getWinnerName();
    if (winner2 === computer.getFullName()) {
        console.log(`Game Test 16 passed : getWinnerName returns the computer when the computer has a higher score`);
    } else {
        console.assert(winner2 === computer.getFullName(), `Game Test 16 failed : expected ${computer.getFullName()} but got ${winner2}`);
    }

    player1.addScore(20);
    const winner3 = game.getWinnerName();

    if (winner3 === "Tie") {
        console.log(`Game Test 17 passed : getWinnerName returns "Tie" when scores are equal`);
    } else {
        console.assert(winner3 === "Tie", `Game Test 17 failed : expected Tie but got ${winner3}`);
    }

    computer.addScore(10);
    const loser1 = game.getLoserName();

    if (loser1 === player1.getFullName()) {
        console.log(`Game Test 18 passed : getLoserName returns the human when the human has the lower score`);
    } else {
        console.assert(loser1 === player1.getFullName(), `Game Test 18 failed : expected ${player1.getFullName()} but got ${loser1}`);
    }


    player1.resetScore();
    computer.resetScore();
    player1.addScore(40);
    computer.addScore(5);
    const loser2 = game.getLoserName();

    if (loser2 === computer.getFullName()) {
        console.log(`Game Test 19 passed : getLoserName returns the computer when the computer has the lower score`);
    } else {
        console.assert(loser2 === computer.getFullName(), `Game Test 19 failed : expected ${computer.getFullName()} but got ${loser2}`);
    }

    computer.addScore(35);
    const loser3 = game.getLoserName();

    if (loser3 === "Tie") {
        console.log(`Game Test 20 passed : getLoserName returns "Tie" when scores are equal`);
    } else {
        console.assert(loser3 === "Tie", `Game Test 20 failed : expected Tie but got ${loser3}`);
    }

    //Game simulation

    function simulateTurn() {
        let result;
        while (true) {
            result = game.advanceTurn();
            if (typeof result === "string") break;
            console.log(`  Rolled: [${result.rolled}] | Kept: ${result.kept} | Kept so far: [${result.keptSoFar}] | Rolls left: ${result.rollsRemaining}`);
            if (result.rollsRemaining === 0) break;
        }
    }

    function simulateGame(rounds) {
        game.setRounds(rounds);
        console.log(`\n=== Game Start | ${rounds} round(s) ===`);
        game.startGame();

        while (true) {
            const state = game.getState();
            console.log(`\n-- Round ${state.round}/${state.roundsTotal} | Player: ${state.currentPlayer} --`);
            simulateTurn();

            const next = game.nextTurnOrRound();
            const scores = game.getState();
            console.log(`  Scores -> ${player1.getFullName()}: ${scores.humanScore} | ${computer.getFullName()}: ${scores.computerScore}`);

            if (next.type === "gameOver") {
                console.log(`\n=== Game Over ===`);
                console.log(`  Winner: ${next.winner}`);
                console.log(`  Loser:  ${next.loser}`);
                break;
            }
        }
    }

    simulateGame(3);




}());

