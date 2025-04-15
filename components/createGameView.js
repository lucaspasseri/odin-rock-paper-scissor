import { renderPage } from "../game/renderPage.js";
import { state } from "../state.js";
import { setPlayerChoice } from "../game/setPlayerChoice.js";
import { playRound } from "../game/playRound.js";

function reset() {
	renderPage("introduction");
}

function createGameView(playerName) {
	const container = document.createElement("div");
	container.className = "game";

	const backgroundImageDiv = document.createElement("div");
	backgroundImageDiv.className = "background-image-div";

	const boardGame = document.createElement("div");
	boardGame.className = "board-game";

	const playerSide = document.createElement("div");
	playerSide.className = "player-side";

	const opponentSide = document.createElement("div");
	opponentSide.className = "opponent-side";

	const rockBtn = document.createElement("button");
	rockBtn.className = "option";
	rockBtn.id = "rock";
	rockBtn.onclick = setPlayerChoice;

	const paperBtn = document.createElement("button");
	paperBtn.className = "option";
	paperBtn.id = "paper";
	paperBtn.onclick = setPlayerChoice;

	const scissorsBtn = document.createElement("button");
	scissorsBtn.className = "option";
	scissorsBtn.id = "scissors";
	scissorsBtn.onclick = setPlayerChoice;

	const confirmContainer = document.createElement("div");
	confirmContainer.className = "confirm-container";

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

	const playerScoreContainer = document.createElement("div");
	playerScoreContainer.className = "player-score-container";

	const opponentScoreText = document.createElement("p");
	opponentScoreText.className = "text size-32";
	opponentScoreText.id = "opponentScoreText";
	opponentScoreText.textContent = `BOT: ${state.opponentScore}`;

	const opponentScoreContainer = document.createElement("div");
	opponentScoreContainer.className = "opponent-score-container";

	opponentScoreContainer.appendChild(opponentScoreText);

	playerScoreContainer.appendChild(playerScoreText);

	flipCardInnerDiv.appendChild(flipCardFrontDiv);
	flipCardInnerDiv.appendChild(flipCardBackDiv);

	flipCardDiv.appendChild(flipCardInnerDiv);

	opponentChoice.appendChild(flipCardDiv);

	playerSide.appendChild(playerScoreContainer);
	playerSide.appendChild(rockBtn);
	playerSide.appendChild(paperBtn);
	playerSide.appendChild(scissorsBtn);

	opponentSide.appendChild(opponentScoreContainer);
	opponentSide.appendChild(opponentChoice);

	boardGame.appendChild(playerSide);
	boardGame.appendChild(opponentSide);

	confirmContainer.appendChild(confirmBtn);
	confirmContainer.appendChild(resetBtn);

	backgroundImageDiv.appendChild(boardGame);

	container.appendChild(backgroundImageDiv);
	container.appendChild(confirmContainer);

	return container;
}

export { createGameView };
