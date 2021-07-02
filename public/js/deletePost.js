const deletePost = async (event) => {
  let id = event.target.dataset.id;
  console.log("hey");
  console.log(id);
  // const response = await fetch(`/api/posts/:id`, {
  //     method: `DELETE`,
  //     body: JSON.stringify({ id }),
  //     headers: { 'Content-Type': 'application/json' },
  // })

  // if (response.ok) {
  //     document.location.replace('/dashboard/:id');
  // }
};

const setDataId = (event) => {
  let id = event.target.dataset.id;
  document.getElementById(`deleteBtn`).setAttribute(`data-id`, id);
};

document.querySelectorAll(`.deleteModalBtn`).forEach((button) => button.addEventListener(`click`, setDataId));
document.getElementById(`deleteBtn`).addEventListener(`click`, deletePost);