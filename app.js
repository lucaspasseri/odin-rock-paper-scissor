import { capitalize } from "./util.js";

let playerScore = 0;
let computerScore = 0;

let playerChoice;

const nav = createNavbar();
const cpuComponent = createCPUChoiceComponent();
const container = document.querySelector(".container");
document.body.insertBefore(nav, container);
const cpuChoice = document.querySelector(".cpu-choice");
cpuChoice.append(cpuComponent);

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

function compareChoices(computerChoice) {
	if (playerChoice === computerChoice) {
		console.log("It is a draw!");
	} else if (playerChoice === "rock" && computerChoice === "scissors") {
		playerScore += 1;
		console.log("You won!\nRock beats scissors.");
	} else if (playerChoice === "scissors" && computerChoice === "paper") {
		playerScore += 1;
		console.log("You won!\nScissors beats paper.");
	} else if (playerChoice === "paper" && computerChoice === "rock") {
		playerScore += 1;
		console.log("You won!\nPaper beats rock.");
	} else {
		computerScore += 1;
		console.log(
			`You lost!\n${capitalize(computerChoice)} beats ${playerChoice}.`
		);
	}
}

function playRound() {
	console.log({ playerChoice });

	if (playerChoice) {
		const computerChoice = getComputerChoice();
		const cpuChoiceText = document.querySelector(".choiceText");
		cpuChoiceText.textContent = computerChoice;
		compareChoices(computerChoice);

		playerChoice = null;
		const selectedChoice = document.querySelector(".selected-choice");
		selectedChoice.classList.toggle("selected-choice");
	} else {
		const warning = document.querySelector("#warning");
		warning?.classList.toggle("hide");
	}
}

function setPlayerChoice(event) {
	const selectedChoice = event.target.id;
	const choices = event.srcElement.parentNode.childNodes;

	choices.forEach(
		choice =>
			choice.classList?.contains("selected-choice") &&
			choice.classList?.toggle("selected-choice")
	);
	event.srcElement.classList.toggle("selected-choice");
	playerChoice = selectedChoice;

	const warning = document.querySelector("#warning");

	if (!warning?.classList.contains("hide")) {
		warning.classList.toggle("hide");
	}
}

const choiceButtons = document.querySelectorAll(".choice");
choiceButtons.forEach(btn => btn.addEventListener("click", setPlayerChoice));

const startRoundButton = document.querySelector("#start-round");
startRoundButton.addEventListener("click", playRound);

// function playGame() {
// let humanScore = 0;
// let computerScore = 0;

// let computerChoice;
// let humanChoice;

// 	function playRound(humanChoice, computerChoice) {
// 		computerChoice = getComputerChoice();
// 		humanChoice = null;

// 		if (humanChoice === computerChoice) {
// 			console.log("It is a draw!");
// 		} else if (humanChoice === "rock" && computerChoice === "scissors") {
// 			humanScore += 1;
// 			console.log("You won!\nRock beats scissors.");
// 		} else if (humanChoice === "scissors" && computerChoice === "paper") {
// 			humanScore += 1;
// 			console.log("You won!\nScissors beats paper.");
// 		} else if (humanChoice === "paper" && computerChoice === "rock") {
// 			humanScore += 1;
// 			console.log("You won!\nPaper beats rock.");
// 		} else {
// 			computerScore += 1;
// 			console.log(
// 				`You lost!\n${capitalize(computerChoice)} beats ${humanChoice}.`
// 			);
// 		}
// 	}

// 	playRound(humanChoice, computerChoice);

// 	while (humanScore !== 5 && computerScore !== 5) {
// 		playRound(humanChoice, computerChoice);
// 	}

// 	if (humanScore > computerScore) {
// 		console.log(`Well done, you won!\n${humanScore} x ${computerScore}`);
// 	} else {
// 		console.log(`You lost!\n${computerScore} x ${humanScore}`);
// 	}
// }

// playGame();

function createNavbar() {
	const navbar = document.createElement("nav");
	navbar.style =
		"background: #009688 ; height: 80px; display: flex; align-items:center";
	const p = document.createElement("p");
	p.textContent = "Rock X Paper X Scissors";
	p.style =
		"margin: 0 auto; color: white; font-size: 36px; font-family: 'Wallpoet', sans-serif";
	navbar.appendChild(p);

	return navbar;
}

function createCPUChoiceComponent() {
	const div = document.createElement("div");
	div.style =
		"background: #009688 ; height: 80px; display: flex; align-items:center";
	const p = document.createElement("p");
	p.className = "choiceText";
	p.textContent = "";
	p.style =
		"margin: 0 auto; color: white; font-size: 36px; font-family: 'Wallpoet', sans-serif";
	div.appendChild(p);

	return div;
}
