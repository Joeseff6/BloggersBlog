const deletePost = async (event) => {
  // const response = await fetch(`/api/posts/:id`, {
  //     method: `POST`,
  //     body: JSON.stringify({ title, text }),
  //     headers: { 'Content-Type': 'application/json' },
  // })

  // if (response.ok) {
  //     document.location.replace('/posts');
  // }
  console.log("hey")
}

document.querySelectorAll(`.deleteBtn`).forEach(button => button.addEventListener(`click`, deletePost));

let deleteBtns = document.querySelectorAll(`.deleteBtn`)
console.log(deleteBtns)