import { createNavbar } from "./components/createNavbar.js";
import { createIntroduction } from "./components/createIntroduction.js";
import { createGame } from "./components/createGame.js";
import { state, initialState } from "./state.js";
import { createEndgame } from "./components/createEndgame.js";

const container = document.querySelector(".container");

const nav = createNavbar();
document.body.insertBefore(nav, container);

export function renderPage(page) {
	container.innerHTML = "";

	switch (page) {
		case "introduction":
			Object.assign(state, initialState);
			const introduction = createIntroduction();
			container.appendChild(introduction);
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
