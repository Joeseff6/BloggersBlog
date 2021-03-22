const commentBtn = document.getElementById(`commentBtn`);
const commentForm = document.getElementById(`commentForm`);

commentBtn.addEventListener(`click`, () => {
    commentForm.style.display = "block"
})


const postComment = (event) => {
    event.preventDefault();
    const comment = document.getElementById(`commentText`).value.trim();
    const response = fetch(`/api/users/newComment`, {
        method: `POST`,
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.reload();
    }
}

commentForm.addEventListener(`submit`, postComment)