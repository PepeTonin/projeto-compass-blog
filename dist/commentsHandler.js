"use strict";
function addCommentInPage(user, body) {
    commentContainer.innerHTML += `
  <div class="comment">
    <p class="comment-user">${user}</p>
    <p class="comment-body">${body}</p>
  </div>
  `;
}
const commentContainer = document.querySelector(".comments");
const result = Math.floor(Math.random() * 25) + 1;
commentContainer.innerHTML = `<p class="comment-title">User comments</p>`;
fetch(`https://dummyjson.com/comments?limit=5&skip=${result}&select=body,postId`)
    .then((res) => res.json())
    .then((data) => {
    for (let i = 0; i < 5; i++) {
        addCommentInPage(data.comments[i].user.username, data.comments[i].body);
    }
});
function postNewCommentHandler() {
    let newCommentName = inpNewCommentName.value;
    let newCommentText = inpNewCommentText.value;
    if (newCommentName.length > 0 && newCommentText.length > 0) {
        addCommentInPage(newCommentName, newCommentText);
        inpNewCommentName.value = "";
        inpNewCommentText.value = "";
    }
    else {
        alert("Invalid input!");
    }
}
const inpNewCommentText = document.getElementById("newCommentText");
const inpNewCommentName = document.getElementById("newCommentName");
const btnNewComment = document.getElementById("newCommentBtn");
btnNewComment.addEventListener("click", postNewCommentHandler);
inpNewCommentName.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        postNewCommentHandler();
    }
});
inpNewCommentText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        postNewCommentHandler();
    }
});
