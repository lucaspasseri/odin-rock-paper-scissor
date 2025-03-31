import { capitalize } from "./util.js";

function getComputerChoice() {
	const randomChoice = Math.floor(Math.random() * 3);

	switch (randomChoice) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

function getHumanChoice() {
	const answer = prompt(
		"Enter your choice: rock, paper or scissors"
	).toLowerCase();

	return answer;
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	let computerChoice;
	let humanChoice;

	function playRound(humanChoice, computerChoice) {
		computerChoice = getComputerChoice();
		humanChoice = getHumanChoice();

		if (humanChoice === computerChoice) {
			console.log("It is a draw!");
		} else if (humanChoice === "rock" && computerChoice === "scissors") {
			humanScore += 1;
			console.log("You won!\nRock beats scissors.");
		} else if (humanChoice === "scissors" && computerChoice === "paper") {
			humanScore += 1;
			console.log("You won!\nScissors beats paper.");
		} else if (humanChoice === "paper" && computerChoice === "rock") {
			humanScore += 1;
			console.log("You won!\nPaper beats rock.");
		} else {
			computerScore += 1;
			console.log(
				`You lost!\n${capitalize(computerChoice)} beats ${humanChoice}.`
			);
		}
	}

	while (humanScore !== 5 && computerScore !== 5) {
		playRound(humanChoice, computerChoice);
	}

	if (humanScore > computerScore) {
		console.log(`Well done, you won!\n${humanScore} x ${computerScore}`);
	} else {
		console.log(`You lost!\n${computerScore} x ${humanScore}`);
	}
}

playGame();
