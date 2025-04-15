import { state } from "../state.js";
import { isGameOver } from "./isGameOver.js";

function compareChoices() {
	const winCombos = {
		rock: "scissors",
		scissors: "paper",
		paper: "rock",
	};

	if (state.playerChoice !== state.opponentChoice) {
		if (winCombos[state.playerChoice] === state.opponentChoice) {
			state.playerScore++;
		} else {
			state.opponentScore++;
		}
	}

	document.querySelector("#playerScoreText").textContent = state.playerName
		? `${state.playerName}: ${state.playerScore}`
		: `YOU: ${state.playerScore}`;

	document.querySelector(
		"#opponentScoreText"
	).textContent = `BOT: ${state.opponentScore}`;

	return isGameOver(state.gameMode, state.playerScore, state.opponentScore);
}

export { compareChoices };
