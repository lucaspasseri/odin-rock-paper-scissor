import { renderPage } from "../app.js";
import { state } from "../state.js";
import { capitalize } from "../util.js";

function isGameOver() {
	switch (state.gameMode) {
		case "bof1":
			if (state.playerScore === 1 || state.opponentScore === 1) {
				return true;
			}

		case "bof3":
			if (state.playerScore === 2 || state.opponentScore === 2) {
				return true;
			}

		case "bof5":
			if (state.playerScore === 3 || state.opponentScore === 3) {
				return true;
			}
		default:
			return false;
	}
}

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

function compareChoices() {
	if (state.playerChoice === state.opponentChoice) {
		console.log("It is a draw!");
	} else if (
		state.playerChoice === "rock" &&
		state.opponentChoice === "scissors"
	) {
		state.playerScore += 1;
		console.log("You won!\nRock beats scissors.");
	} else if (
		state.playerChoice === "scissors" &&
		state.opponentChoice === "paper"
	) {
		state.playerScore += 1;
		console.log("You won!\nScissors beats paper.");
	} else if (
		state.playerChoice === "paper" &&
		state.opponentChoice === "rock"
	) {
		state.playerScore += 1;
		console.log("You won!\nPaper beats rock.");
	} else {
		state.opponentScore += 1;
		console.log(
			`You lost!\n${capitalize(state.opponentChoice)} beats ${
				state.playerChoice
			}.`
		);
	}

	const playerScoreText = document.querySelector("#playerScoreText");
	playerScoreText.textContent = state.playerName
		? `${state.playerName}: ${state.playerScore}`
		: `YOU: ${state.playerScore}`;

	const opponentScoreText = document.querySelector("#opponentScoreText");
	opponentScoreText.textContent = `BOT: ${state.opponentScore}`;

	const isOver = isGameOver();

	if (isOver) {
		return true;
	}
}

function playRound() {
	if (state.playerChoice) {
		state.opponentChoice = getComputerChoice();

		const opponentFlipCardInner = document.querySelector(".flip-card-inner");
		opponentFlipCardInner.classList.add("rotate-flip-card");

		const opponentFlipCardBack = document.querySelector(".flip-card-back");
		opponentFlipCardBack.className = "flip-card-back";
		opponentFlipCardBack.classList.add(`${state.opponentChoice}`);

		const isOver = compareChoices();

		const selectedChoice = document.querySelector(".selected-choice");
		selectedChoice.classList.toggle("selected-choice");
		state.playerChoice = "";

		if (isOver) {
			const confirmBtn = document.querySelector("#confirmBtn");
			confirmBtn.disabled = true;

			const resetBtn = document.querySelector("#resetBtn");
			resetBtn.disabled = false;

			const options = document.querySelectorAll(".option");
			console.log({ options });

			options.forEach(opt => (opt.disabled = true));
		}
	} else {
		const options = document.querySelectorAll(".option");

		options.forEach(opt => {
			opt.classList.add("gloom");
			setTimeout(() => opt.classList.remove("gloom"), 2000);
		});
	}
}

function setPlayerChoice(event) {
	console.log("setPLayerChoice", { state });

	const selectedChoice = event.target;
	const selectedChoiceName = event.target.id;

	state.playerChoice = selectedChoiceName;

	const options = document.querySelectorAll(".option");
	options.forEach(opt => (opt.className = "option"));

	selectedChoice.classList.add("selected-choice");

	if (state.opponentChoice) {
		const opponentFlipCardInner = document.querySelector(".flip-card-inner");
		opponentFlipCardInner.classList.toggle("rotate-flip-card");

		state.opponentChoice = "";
	}
}

function reset() {
	renderPage("introduction");
}

function createGame(playerName) {
	const container = document.createElement("div");
	container.className = "game";
	container.style =
		"background: #161616 ; display: flex; align-items:center; flex-direction: column; padding: 12px; gap: 8px;";
	const backgroundImage = document.createElement("div");
	backgroundImage.style =
		"background-image: url('versusImage.png'); width: 800px; height: 800px; background-size: cover; display: flex; flex-direction: column";

	const boardGame = document.createElement("div");
	boardGame.style =
		"∂padding: 10px; display: flex; flex: 1; flex-direction: column-reverse";

	const playerSide = document.createElement("div");
	playerSide.style =
		"flex: 1; display: flex; justify-content: space-around; padding: 0 10px; align-items: end; position: relative";
	const opponentSide = document.createElement("div");
	opponentSide.style =
		"flex: 1; display: flex; justify-content: center; align-items: start; padding: 0 10px; position: relative";

	const rockBtn = document.createElement("button");
	rockBtn.className = "option";
	rockBtn.textContent = "Rock";
	rockBtn.id = "rock";
	rockBtn.onclick = setPlayerChoice;

	const paperBtn = document.createElement("button");
	paperBtn.className = "option";
	paperBtn.textContent = "Paper";
	paperBtn.id = "paper";
	paperBtn.onclick = setPlayerChoice;

	const scissorsBtn = document.createElement("button");
	scissorsBtn.className = "option";
	scissorsBtn.textContent = "Scissors";
	scissorsBtn.id = "scissors";
	scissorsBtn.onclick = setPlayerChoice;

	const confirmContainer = document.createElement("div");
	confirmContainer.style =
		"display: flex; justify-content: center; margin-top: 20px; gap: 20px";

	const confirmBtn = document.createElement("button");
	confirmBtn.className = "text size-32";
	confirmBtn.textContent = "Confirm";
	confirmBtn.id = "confirmBtn";
	confirmBtn.onclick = playRound;

	const resetBtn = document.createElement("button");
	resetBtn.className = "text size-32";
	resetBtn.textContent = "Reset";
	resetBtn.id = "resetBtn";
	resetBtn.onclick = reset;
	resetBtn.disabled = true;

	const opponentChoice = document.createElement("div");
	opponentChoice.id = "opponent-choice";
	opponentChoice.style = "margin-top: 10px;";

	const flipCardDiv = document.createElement("div");
	flipCardDiv.classList.add("flip-card");

	const flipCardInnerDiv = document.createElement("div");
	flipCardInnerDiv.classList.add("flip-card-inner");

	const flipCardFrontDiv = document.createElement("div");
	flipCardFrontDiv.classList.add("blank-option");
	flipCardFrontDiv.classList.add("flip-card-front");

	const flipCardBackDiv = document.createElement("div");
	flipCardBackDiv.classList.add("flip-card-back");

	const playerScoreText = document.createElement("p");
	playerScoreText.className = "text size-32";
	playerScoreText.id = "playerScoreText";
	playerScoreText.textContent = playerName
		? `${playerName}: ${state.playerScore}`
		: `YOU: ${state.playerScore}`;

	const playerScoreDiv = document.createElement("div");
	playerScoreDiv.style =
		"position: absolute; top:0; left: 0; margin-left: 20px; margin-top: 60px";

	const opponentScoreText = document.createElement("p");
	opponentScoreText.className = "text size-32";
	opponentScoreText.id = "opponentScoreText";
	opponentScoreText.textContent = `BOT: ${state.opponentScore}`;

	const opponentScoreDiv = document.createElement("div");
	opponentScoreDiv.style =
		"position: absolute; bottom: 0; left: 0; margin-left: 20px; margin-bottom: 60px";

	opponentScoreDiv.appendChild(opponentScoreText);

	playerScoreDiv.appendChild(playerScoreText);

	flipCardInnerDiv.appendChild(flipCardFrontDiv);
	flipCardInnerDiv.appendChild(flipCardBackDiv);

	flipCardDiv.appendChild(flipCardInnerDiv);

	opponentChoice.appendChild(flipCardDiv);

	playerSide.appendChild(playerScoreDiv);
	playerSide.appendChild(rockBtn);
	playerSide.appendChild(paperBtn);
	playerSide.appendChild(scissorsBtn);

	opponentSide.appendChild(opponentScoreDiv);
	opponentSide.appendChild(opponentChoice);

	boardGame.appendChild(playerSide);
	boardGame.appendChild(opponentSide);

	confirmContainer.appendChild(confirmBtn);
	confirmContainer.appendChild(resetBtn);

	backgroundImage.appendChild(boardGame);

	container.appendChild(backgroundImage);
	container.appendChild(confirmContainer);

	return container;
}

export { createGame };
