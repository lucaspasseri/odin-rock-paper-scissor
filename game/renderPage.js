import { introductionView } from "../components/introductionView.js";
import { createGameView } from "../components/createGameView.js";
import { state, initialState } from "../state.js";
import { footerComponent } from "../components/footerComponent.js";

function renderPage(page) {
	const container = document.querySelector(".container");
	container.innerHTML = "";

	switch (page) {
		case "introduction":
			Object.assign(state, initialState);
			container.appendChild(introductionView);
			break;
		case "game":
			const game = createGameView(state.playerName);
			container.appendChild(game);
			document.body.contains(footerComponent) &&
				document.body.removeChild(footerComponent);
			break;
		default:
			container.innerHTML = "<h2>Page not found</h2>";
			break;
	}
}

export { renderPage };
