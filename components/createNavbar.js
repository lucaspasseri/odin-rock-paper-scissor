function createNavbar() {
	const navbar = document.createElement("nav");
	navbar.style =
		"background: #009688 ; height: 80px; display: flex; align-items:center";
	const p = document.createElement("p");
	p.textContent = "Rock X Paper X Scissors";
	p.style =
		"margin: 0 auto; color: white; font-size: 36px; font-family: 'Wallpoet', sans-serif";
	navbar.appendChild(p);

	return navbar;
}

export { createNavbar };
