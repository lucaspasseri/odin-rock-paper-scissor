function createFooter() {
	const footer = document.createElement("footer");
	footer.style = "text-align: center; background: #161616; padding: 4px 0";

	const p1 = document.createElement("p");

	const p2 = document.createElement("p");

	const a1 = document.createElement("a");
	a1.textContent = "Images designed by rocketpixel / Freepik";
	a1.href = "http://www.freepik.com";

	const a2 = document.createElement("a");
	a2.textContent = "Images designed by CleanPng";
	a2.href = "http://www.cleanpng.com";

	p1.appendChild(a1);
	p2.appendChild(a2);

	footer.appendChild(p1);
	footer.appendChild(p2);

	return footer;
}

const footerComponent = createFooter();

export { footerComponent };
