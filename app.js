import { navbarComponent } from "./components/navbarComponent.js";
import { renderPage } from "./game/renderPage.js";
import { footerComponent } from "./components/footerComponent.js";

const container = document.querySelector(".container");
document.body.insertBefore(navbarComponent, container);
document.body.appendChild(footerComponent);

renderPage("introduction");
