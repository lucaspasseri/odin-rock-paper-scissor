import state from "../state.js";
import { capitalize } from "../util.js";

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
	console.log({
		state,
	});
}

function playRound() {
	console.log({ playerChoice: state.playerChoice });

	if (state.playerChoice) {
		state.opponentChoice = getComputerChoice();
		// const cpuChoiceText = document.querySelector(".choiceText");
		// cpuChoiceText.textContent = computerChoice;
		compareChoices();
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
}

function createGame(gameMode, playerName) {
	const container = document.createElement("div");
	container.className = "game";
	container.style =
		"background: #83d0c9; display: flex; align-items:center; flex-direction: column; padding: 12px; gap: 8px;";
	const title = document.createElement("h1");
	title.textContent = `Game Mode: ${gameMode} | Player: ${playerName}`;
	container.appendChild(title);

	const backgroundImage = document.createElement("div");
	backgroundImage.style =
		"background-image: url('123.jpg'); width: 600px; height: 400px; background-size: cover; display: flex; flex-direction: column";

	container.appendChild(backgroundImage);

	const boardGame = document.createElement("div");
	boardGame.style =
		"border: 1px solid purple; padding: 10px; display: flex; flex: 1; justify-content: space-between";

	const playerSide = document.createElement("div");
	playerSide.style =
		"border: 1px solid green; flex: 1; display: flex; flex-direction: column; justify-content: space-around; padding: 0 10px;";
	const opponentSide = document.createElement("div");
	opponentSide.style = "border: 1px solid orange; flex: 1";

	const rockBtn = document.createElement("button");
	rockBtn.textContent = "Rock";
	rockBtn.id = "rock";
	rockBtn.className = "option";
	rockBtn.onclick = setPlayerChoice;

	const paperBtn = document.createElement("button");
	paperBtn.textContent = "Paper";
	paperBtn.id = "paper";
	paperBtn.className = "option";
	paperBtn.onclick = setPlayerChoice;

	const scissorsBtn = document.createElement("button");
	scissorsBtn.textContent = "Scissors";
	scissorsBtn.id = "scissors";
	scissorsBtn.className = "option";
	scissorsBtn.onclick = setPlayerChoice;

	const confirmContainer = document.createElement("div");
	confirmContainer.style = "display: flex; justify-content: center";

	const confirmBtn = document.createElement("button");
	confirmBtn.style = "height: fit-content";
	confirmBtn.textContent = "Confirm";
	confirmBtn.onclick = playRound;

	playerSide.appendChild(rockBtn);
	playerSide.appendChild(paperBtn);
	playerSide.appendChild(scissorsBtn);

	boardGame.appendChild(playerSide);
	boardGame.appendChild(opponentSide);

	confirmContainer.appendChild(confirmBtn);

	backgroundImage.appendChild(boardGame);
	backgroundImage.appendChild(confirmContainer);

	return container;
}

export { createGame };
