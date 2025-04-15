import { navbarComponent } from "./components/navbarComponent.js";
import { introductionView } from "./components/introductionView.js";
import { createGame } from "./components/createGame.js";
import { state, initialState } from "./state.js";
import { footerComponent } from "./components/footerComponent.js";

const container = document.querySelector(".container");
document.body.insertBefore(navbarComponent, container);

export function renderPage(page) {
	container.innerHTML = "";

	switch (page) {
		case "introduction":
			Object.assign(state, initialState);
			container.appendChild(introductionView);
			document.body.appendChild(footerComponent);
			break;
		case "game":
			const game = createGame(state.playerName);
			container.appendChild(game);
			document.body.removeChild(footerComponent);
			break;
		default:
			container.innerHTML = "<h2>Page not found</h2>";
			break;
	}
}

renderPage("introduction");
