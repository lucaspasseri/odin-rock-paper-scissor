import { createNavbar } from "./components/createNavbar.js";
import { createIntroduction } from "./components/createIntroduction.js";
import { createGame } from "./components/createGame.js";
import state from "./state.js";

const container = document.querySelector(".container");

const nav = createNavbar();
document.body.insertBefore(nav, container);

export function renderPage(page) {
	container.innerHTML = "";

	switch (page) {
		case "introduction":
			const introduction = createIntroduction();
			container.appendChild(introduction);
			break;
		case "game":
			const game = createGame(state.gameMode, state.playerName); // Pass game mode and player name to the game component
			container.appendChild(game);
			break;
		default:
			container.innerHTML = "<h2>Page not found</h2>";
			break;
	}
}

renderPage("introduction"); // Render the introduction on load
