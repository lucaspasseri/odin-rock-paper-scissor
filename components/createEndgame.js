import { renderPage } from "../game.js";

function createEndgame(playerScore, opponentScore, gameMode, playerName) {
	const container = document.createElement("div");
	const h1 = document.createElement("h1");

	if (playerScore > opponentScore) {
		h1.textContent = playerName
			? `Congratulations, ${playerName}!\n
		You won! ${playerScore} x ${opponentScore}`
			: `Congratulations!\n
		You won! ${playerScore} x ${opponentScore}`;
	} else {
		h1.textContent = `You lost! ${playerScore} x ${opponentScore}`;
	}

	const goHomeButton = document.createElement("button");
	goHomeButton.textContent = "Home";

	goHomeButton.addEventListener("click", () => renderPage("introduction"));

	container.appendChild(h1);
	container.appendChild(goHomeButton);

	return container;
}

export { createEndgame };
