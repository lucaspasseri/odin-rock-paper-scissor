function isGameOver(gameMode, playerScore, opponentScore) {
	const winScore = { bof1: 1, bof3: 2, bof5: 3 }[gameMode];

	return winScore && (playerScore >= winScore || opponentScore >= winScore);
}

export { isGameOver };
