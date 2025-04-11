import { state } from "../state.js";
import { renderPage } from "../game.js";

function navigateToGame(gameMode) {
	state.gameMode = gameMode;
	renderPage("game");
}

function createIntroduction() {
	const container = document.createElement("div");
	container.className = "introduction";
	container.style =
		"background: #83d0c9; display: flex; align-items:center; flex-direction: column; padding: 12px; gap: 8px";

	const buttonStyle =
		"background: #009688; color: white; font-size: 36px; font-family: 'Wallpoet', sans-serif; width: 100%";

	const bestOf1 = document.createElement("button");
	bestOf1.textContent = "Best of 1";
	bestOf1.onclick = () => navigateToGame("bof1");
	bestOf1.style = buttonStyle;

	const bestOf3 = document.createElement("button");
	bestOf3.textContent = "Best of 3";
	bestOf3.onclick = () => navigateToGame("bof3");
	bestOf3.style = buttonStyle;

	const bestOf5 = document.createElement("button");
	bestOf5.textContent = "Best of 5";
	bestOf5.onclick = () => navigateToGame("bof5");
	bestOf5.style = buttonStyle;

	const nameInput = document.createElement("input");
	nameInput.setAttribute("type", "text");
	nameInput.placeholder = "Insert your name";
	nameInput.oninput = e => (state.playerName = e.target.value);

	container.appendChild(nameInput);
	container.appendChild(bestOf1);
	container.appendChild(bestOf3);
	container.appendChild(bestOf5);

	return container;
}

export { createIntroduction };
