import "./thanos-snap.scss";
import html from "./html-dump";
import randomize from "./randomize";

document.body.innerHTML = html;

const snapButton = document.querySelector(".big-button");
snapButton.addEventListener("click", () => {
  const allSearchElements = [...document.querySelectorAll(".content")];
  const half = randomize(allSearchElements);
  // start the chain reaction
  half.reduce(async (promise, curr) => {
    await promise;
    return scrollTo(curr).then(() => vanish(curr));
  }, Promise.resolve());
});

const scrollTo = node =>
  promisify(() => node.scrollIntoView({ behavior: "smooth" }));

const promisify = fn =>
  new Promise(res => {
    fn();
    setTimeout(res, 1400);
  });

const removeNode = node => {
  return new Promise(res => {
    node.addEventListener("transitionend", () => {
      node.remove();
      res();
    });
  });
};

const vanish = async searchElement => {
  const parent = searchElement.parentNode;
  const clone1 = searchElement.cloneNode(true);
  const clone2 = searchElement.cloneNode(true);
  const p1 = removeNode(clone1);
  const p2 = removeNode(clone2);
  parent.classList.add("relative");
  clone1.classList.add("absolute");
  clone2.classList.add("absolute");

  // finally append to parent
  parent.append(clone1, clone2);

  searchElement.classList.add("fade");
  setTimeout(() => {
    clone1.classList.add("slide-left", "fade");
    clone2.classList.add("slide-right", "fade");
  }, 0);
  return Promise.all([p1, p2]);
};
