// import comments from api
const teste = document.querySelector(".comments")! as HTMLElement;
const result = Math.floor(Math.random() * 25) + 1;
teste.innerHTML = `<p class="comment-title">User comments:</p>`;
fetch(
  `https://dummyjson.com/comments?limit=5&skip=${result}&select=body,postId`
)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      teste.innerHTML += `
      <div class="comment">
        <p class="comment-user">${data.comments[i].user.username}</p>
        <p class="comment-body">${data.comments[i].body}</p>
      </div>
      `;
    }
  });
