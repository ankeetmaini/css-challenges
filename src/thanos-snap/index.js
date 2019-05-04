import "./thanos-snap.scss";
import html from "./html-dump";

document.body.innerHTML = html;

const button = document.querySelector("#snap");

button.addEventListener("click", () => {
  const results = [...document.querySelectorAll(".result")];
  results.forEach((element, i) => {
    // only alternate elements
    if (i % 2 === 0) {
      const parent = element.parentElement;
      const clone1 = element.cloneNode(true);
      const clone2 = element.cloneNode(true);

      parent.classList.add("relative");

      nextFrame(() => {
        clone1.classList.add("abs");
        clone2.classList.add("abs");
      });

      nextFrame(() => {
        parent.append(clone1, clone2);
      });

      nextFrame(() => {
        element.style.visibility = "hidden";
      });

      setTimeout(() => {
        clone1.classList.add("slide-left", "fade");
        clone2.classList.add("slide-right", "fade");
      });
    }
  });
});

const nextFrame = fn => {
  window.requestAnimationFrame(fn);
};
