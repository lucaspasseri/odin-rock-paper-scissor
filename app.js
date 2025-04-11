import { navbarComponent } from "./components/navbarComponent.js";
import { introductionView } from "./components/introductionView.js";
import { createGame } from "./components/createGame.js";
import { state, initialState } from "./state.js";
import { createEndgame } from "./components/createEndgame.js";

const container = document.querySelector(".container");
document.body.insertBefore(navbarComponent, container);

export function renderPage(page) {
	container.innerHTML = "";

	switch (page) {
		case "introduction":
			Object.assign(state, initialState);
			container.appendChild(introductionView);
			break;
		case "game":
			const game = createGame(state.gameMode, state.playerName);
			container.appendChild(game);
			break;
		case "gameOver":
			const endgame = createEndgame(
				state.playerScore,
				state.opponentScore,
				state.gameMode,
				state.playerName
			);
			container.appendChild(endgame);
			break;
		default:
			container.innerHTML = "<h2>Page not found</h2>";
			break;
	}
}

renderPage("introduction");
