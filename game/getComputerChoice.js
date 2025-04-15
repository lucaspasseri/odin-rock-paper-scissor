function getComputerChoice() {
	const randomChoice = Math.floor(Math.random() * 3);
	const choices = ["rock", "paper", "scissors"];

	return choices[randomChoice];
}

export { getComputerChoice };
