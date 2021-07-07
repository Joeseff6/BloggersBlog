const commentBtn = document.getElementById(`commentBtn`);
const commentForm = document.getElementById(`commentForm`);

commentBtn.addEventListener(`click`, () => {
  commentForm.style.display = "block";
});

const postComment = async (event) => {
  event.preventDefault();
  const comment = document.getElementById(`commentText`).value.trim();
  const urlArr = window.location.pathname.split("/");
  const postId = urlArr[urlArr.length - 1];
  const response = await fetch(`/api/comments/`, {
    method: `POST`,
    body: JSON.stringify({ comment, postId }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  }
};

commentForm.addEventListener(`submit`, postComment);
