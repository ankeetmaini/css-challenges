import "./demo.scss";

document.body.innerHTML = "";

const container = document.createElement("div");
container.classList.add("container");
const h1 = document.createElement("h1");
h1.textContent = "Hello, World";

container.appendChild(h1);
document.body.append(container);
