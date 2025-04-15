import { state } from "../state.js";
import { getComputerChoice } from "./getComputerChoice.js";
import { compareChoices } from "./compareChoices.js";

function playRound() {
	if (!state.playerChoice) {
		document.querySelectorAll(".option").forEach(opt => {
			opt.classList.add("gloom");
			setTimeout(() => opt.classList.remove("gloom"), 2000);
		});
		return;
	}

	state.opponentChoice = getComputerChoice();

	document.querySelector(".flip-card-inner").classList.add("rotate-flip-card");

	const opponentBack = document.querySelector(".flip-card-back");
	opponentBack.className = `flip-card-back ${state.opponentChoice}`;

	const isOver = compareChoices();

	document
		.querySelector(".selected-choice")
		?.classList.remove("selected-choice");
	state.playerChoice = "";

	if (isOver) {
		document.querySelector("#confirmBtn").disabled = true;
		document.querySelector("#resetBtn").disabled = false;
		document.querySelectorAll(".option").forEach(opt => (opt.disabled = true));
	}
}

export { playRound };
