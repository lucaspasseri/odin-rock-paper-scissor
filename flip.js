const flipBtn = document.querySelector("#flip-card-btn");
console.log({ flipBtn });

flipBtn.addEventListener("click", () => {
	const flipCard = document.querySelector(".flip-card");
	const flipCardInner = document.querySelector(".flip-card-inner");

	// flipCard.classList.add("rotate-flip-card");
	// flipCardInner.classList.add("rotate-flip-card");

	flipCardInner.classList.toggle("rotate-flip-card");
});
