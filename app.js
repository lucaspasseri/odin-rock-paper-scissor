function getComputerChoice() {
	const randomChoice = Math.floor(Math.random() * 3);

	switch (randomChoice) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

function getHumanChoice() {
	const answer = prompt(
		"Enter your choice: rock, paper and scissors"
	).toLowerCase();

	return answer;
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

console.log({ computerChoice, humanChoice });
