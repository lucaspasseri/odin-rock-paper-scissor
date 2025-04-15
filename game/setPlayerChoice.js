import { state } from "../state.js";

function setPlayerChoice(event) {
	state.playerChoice = event.target.id;

	document
		.querySelectorAll(".option")
		.forEach(opt => (opt.className = "option"));
	event.target.classList.add("selected-choice");

	if (state.opponentChoice) {
		document
			.querySelector(".flip-card-inner")
			.classList.toggle("rotate-flip-card");
		state.opponentChoice = "";
	}
}

export { setPlayerChoice };
