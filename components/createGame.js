import { renderPage } from "../app.js";
import { state } from "../state.js";
import { capitalize } from "../util.js";

function isGameOver() {
	switch (state.gameMode) {
		case "bof1":
			if (state.playerScore === 1 || state.opponentScore === 1) {
				renderPage("gameOver");
				return true;
			}

		case "bof3":
			if (state.playerScore === 2 || state.opponentScore === 2) {
				renderPage("gameOver");
				return true;
			}

		case "bof5":
			if (state.playerScore === 3 || state.opponentScore === 3) {
				renderPage("gameOver");
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

	const isOver = isGameOver();

	if (isOver) {
		return true;
	}

	const subtitle = document.querySelector("h2");
	subtitle.textContent = `Player score: ${state.playerScore} | Opponent score: ${state.opponentScore}`;
}

function playRound() {
	console.log({});

	if (state.playerChoice) {
		state.opponentChoice = getComputerChoice();
		console.log({
			playerChoice: state.playerChoice,
			opponentChoice: state.opponentChoice,
		});
		const opponentFlipCardInner = document.querySelector(".flip-card-inner");
		const opponentFlipCardBack = document.querySelector(".flip-card-back");
		opponentFlipCardBack.classList.add(`${state.opponentChoice}`);
		opponentFlipCardInner.classList.add("rotate-flip-card");
		const isOver = compareChoices();

		if (isOver) {
			return;
		}
		const selectedChoice = document.querySelector(".selected-choice");
		selectedChoice.classList.toggle("selected-choice");
		state.playerChoice = "";
	} else {
		// const warning = document.querySelector("#warning");
		// warning?.classList.toggle("hide");
		console.log("choose one option");
	}
}

function setPlayerChoice(event) {
	const selectedChoice = event.target;
	const selectedChoiceName = event.target.id;
	state.playerChoice = selectedChoiceName;
	const choices = event.srcElement.parentNode.childNodes;

	choices.forEach(
		choice =>
			choice.classList?.contains("selected-choice") &&
			choice.classList?.toggle("selected-choice")
	);

	selectedChoice.classList.toggle("selected-choice");

	console.log({ selectedChoice });

	if (state.opponentChoice) {
		const opponentFlipCardInner = document.querySelector(".flip-card-inner");
		opponentFlipCardInner.classList.toggle("rotate-flip-card");

		const currentOpponentChoice = state.opponentChoice;

		const opponentFlipCardBack = document.querySelector(".flip-card-back");
		opponentFlipCardBack.classList.toggle(currentOpponentChoice);
	}
}

function createGame(gameMode, playerName) {
	const container = document.createElement("div");
	container.className = "game";
	container.style =
		"background: #83d0c9; display: flex; align-items:center; flex-direction: column; padding: 12px; gap: 8px;";
	const title = document.createElement("h1");
	title.textContent = `Game Mode: ${gameMode} | Player: ${playerName}`;
	container.appendChild(title);

	const subtitle = document.createElement("h2");
	subtitle.textContent = `Player score: ${state.playerScore} | Opponent score: ${state.opponentScore}`;
	container.appendChild(subtitle);

	const backgroundImage = document.createElement("div");
	backgroundImage.style =
		"background-image: url('456.png'); width: 800px; height: 800px; background-size: cover; display: flex; flex-direction: column;";

	container.appendChild(backgroundImage);

	const boardGame = document.createElement("div");
	boardGame.style =
		"border: 1px solid purple; padding: 10px; display: flex; flex: 1; flex-direction: column-reverse";

	const playerSide = document.createElement("div");
	playerSide.style =
		"border: 1px solid green; flex: 1; display: flex; justify-content: space-around; padding: 0 10px; align-items: end";
	const opponentSide = document.createElement("div");
	opponentSide.style =
		"border: 1px solid orange; flex: 1; display: flex; justify-content: center; align-items: start; padding: 0 10px;";

	const rockBtn = document.createElement("button");
	rockBtn.textContent = "Rock";
	rockBtn.id = "rock";
	rockBtn.onclick = setPlayerChoice;

	const paperBtn = document.createElement("button");
	paperBtn.textContent = "Paper";
	paperBtn.id = "paper";
	paperBtn.onclick = setPlayerChoice;

	const scissorsBtn = document.createElement("button");
	scissorsBtn.textContent = "Scissors";
	scissorsBtn.id = "scissors";
	scissorsBtn.onclick = setPlayerChoice;

	const confirmContainer = document.createElement("div");
	confirmContainer.style = "display: flex; justify-content: center";

	const confirmBtn = document.createElement("button");
	confirmBtn.style = "height: fit-content";
	confirmBtn.textContent = "Confirm";
	confirmBtn.onclick = playRound;

	const opponentChoice = document.createElement("div");
	opponentChoice.id = "opponent-choice";

	const flipCardDiv = document.createElement("div");
	flipCardDiv.classList.add("flip-card");

	const flipCardInnerDiv = document.createElement("div");
	flipCardInnerDiv.classList.add("flip-card-inner");

	const flipCardFrontDiv = document.createElement("div");
	flipCardFrontDiv.classList.add("blank-option");
	flipCardFrontDiv.classList.add("flip-card-front");

	const flipCardBackDiv = document.createElement("div");
	flipCardBackDiv.classList.add("flip-card-back");

	flipCardInnerDiv.appendChild(flipCardFrontDiv);
	flipCardInnerDiv.appendChild(flipCardBackDiv);

	flipCardDiv.appendChild(flipCardInnerDiv);

	opponentChoice.appendChild(flipCardDiv);

	playerSide.appendChild(rockBtn);
	playerSide.appendChild(paperBtn);
	playerSide.appendChild(scissorsBtn);

	opponentSide.appendChild(opponentChoice);

	boardGame.appendChild(playerSide);
	boardGame.appendChild(opponentSide);

	confirmContainer.appendChild(confirmBtn);

	backgroundImage.appendChild(boardGame);
	backgroundImage.appendChild(confirmContainer);

	return container;
}

export { createGame };
