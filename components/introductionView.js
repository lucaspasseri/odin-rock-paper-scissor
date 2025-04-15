import { state } from "../state.js";
import { renderPage } from "../app.js";

function navigateToGame(e) {
	state.gameMode = e.target.id;
	const nameInput = document.querySelector(".name-input");
	nameInput.value = "";
	renderPage("game");
}

function insertName(e) {
	state.playerName = e.target.value;
}

function createIntroduction() {
	const container = document.createElement("div");
	container.className = "introduction introduction-container";

	const bestOf1 = document.createElement("button");
	bestOf1.textContent = "Best of 1";
	bestOf1.className = "best-of-n-button";
	bestOf1.id = "bof1";
	bestOf1.onclick = navigateToGame;

	const bestOf3 = document.createElement("button");
	bestOf3.textContent = "Best of 3";
	bestOf3.className = "best-of-n-button";
	bestOf3.id = "bof3";
	bestOf3.onclick = navigateToGame;

	const bestOf5 = document.createElement("button");
	bestOf5.textContent = "Best of 5";
	bestOf5.className = "best-of-n-button";
	bestOf5.id = "bof5";
	bestOf5.onclick = navigateToGame;

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.className = "name-input";
	nameInput.placeholder = "Insert your name";
	nameInput.oninput = insertName;

	container.appendChild(nameInput);
	container.appendChild(bestOf1);
	container.appendChild(bestOf3);
	container.appendChild(bestOf5);

	return container;
}

const introductionView = createIntroduction();

export { introductionView };
