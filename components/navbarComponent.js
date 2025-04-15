function createNavbar() {
	const navbar = document.createElement("nav");
	navbar.className = "navbar";

	const p = document.createElement("p");
	p.textContent = "Rock X Paper X Scissors";
	p.className = "text navbar-text";

	navbar.appendChild(p);

	return navbar;
}

const navbarComponent = createNavbar();

export { navbarComponent };
