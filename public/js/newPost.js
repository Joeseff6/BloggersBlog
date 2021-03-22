const createPost = async (event) => {
    event.preventDefault();
    const title = document.getElementById(`title`).value.trim()
    const text = document.getElementById(`postText`).value.trim()
    const response = await fetch(`/api/users/newPost`, {
        method: `POST`,
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/posts');
    }

}

document
.getElementById(`postForm`)
.addEventListener(`submit`, createPost)