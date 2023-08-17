"use strict";
const navList = document.querySelector(".navbar ul");
const hambMenuButton = document.querySelector("#hambMenu");
hambMenuButton.addEventListener("click", () => {
    navList.classList.toggle("active");
});
const pages = document.querySelectorAll(".pages");
const firstPageBtn = document.getElementById("firstPageBtn");
const previousPageBtn = document.getElementById("previousPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const lastPageBtn = document.getElementById("lastPageBtn");
const pageNumber = document.getElementById("pageNumber");
firstPageBtn.addEventListener("click", () => {
});
lastPageBtn.addEventListener("click", () => { });
previousPageBtn.addEventListener("click", () => { });
nextPageBtn.addEventListener("click", () => { });
