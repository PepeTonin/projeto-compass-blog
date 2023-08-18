"use strict";
const navList = document.querySelector(".navbar ul");
const hambMenuButton = document.querySelector("#hambMenu");
hambMenuButton.addEventListener("click", () => {
    navList.classList.toggle("active");
});
