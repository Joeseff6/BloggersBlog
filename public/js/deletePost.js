const deletePost = async (event) => {
  event.preventDefault();
  const response = await fetch(`/api/posts/:id`, {
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