"use strict";
function updateShownPage(pageNumber) {
    elementPageNumber.innerText = pageNumber.toString();
    let index = pageNumber - 1;
    pages.forEach((page, i) => {
        if (page.classList.contains("hide") && i === index || !page.classList.contains("hide") && i !== index) {
            page.classList.toggle("hide");
        }
    });
}
const pages = document.querySelectorAll(".page");
pages.forEach((page) => {
    page.classList.toggle("hide");
});
const elementPageNumber = document.getElementById("pageNumber");
const firstPageBtn = document.getElementById("firstPageBtn");
const previousPageBtn = document.getElementById("previousPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const lastPageBtn = document.getElementById("lastPageBtn");
updateShownPage(+elementPageNumber.innerText);
firstPageBtn.addEventListener("click", () => {
    if (elementPageNumber.innerText !== "1") {
        updateShownPage(1);
    }
});
previousPageBtn.addEventListener("click", () => {
    let actualPage = +elementPageNumber.innerText;
    if (actualPage > 1) {
        updateShownPage(actualPage - 1);
    }
});
nextPageBtn.addEventListener("click", () => {
    let actualPage = +elementPageNumber.innerText;
    if (actualPage < pages.length) {
        updateShownPage(actualPage + 1);
    }
});
lastPageBtn.addEventListener("click", () => {
    let pageNumber = +elementPageNumber.innerText;
    if (pageNumber < pages.length) {
        updateShownPage(pages.length);
    }
});
