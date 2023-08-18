// navbar
const navList = document.querySelector(".navbar ul")! as HTMLUListElement;
const hambMenuButton = document.querySelector("#hambMenu")! as HTMLImageElement;
hambMenuButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});