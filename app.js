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

let humanScore = 0;
let computerScore = 0;
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {
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
			`You lose!\n${capitalize(computerChoice)} beats ${humanChoice}.`
		);
	}
}

playRound(humanChoice, computerChoice);
