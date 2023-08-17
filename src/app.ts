// navbar
const navList = document.querySelector(".navbar ul")! as HTMLUListElement;
const hambMenuButton = document.querySelector("#hambMenu")! as HTMLImageElement;
hambMenuButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// pagination
const pages = document.querySelectorAll(".pages")! as NodeListOf<HTMLElement>;

const firstPageBtn = document.getElementById(
  "firstPageBtn"
)! as HTMLImageElement;

const previousPageBtn = document.getElementById(
  "previousPageBtn"
)! as HTMLImageElement;

const nextPageBtn = document.getElementById("nextPageBtn")! as HTMLImageElement;

const lastPageBtn = document.getElementById("lastPageBtn")! as HTMLImageElement;

const pageNumber = document.getElementById(
  "pageNumber"
)! as HTMLParagraphElement;

firstPageBtn.addEventListener("click", () => {
});

lastPageBtn.addEventListener("click", () => {});

previousPageBtn.addEventListener("click", () => {});

nextPageBtn.addEventListener("click", () => {});
