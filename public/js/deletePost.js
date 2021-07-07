const deletePost = async (event) => {
  let postInfo = {
    id: event.target.dataset.id,
  };
  let response = await fetch("/api/posts/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postInfo),
  });
  if (response.ok) {
    document.location.reload();
  }
};

const setDataId = (event) => {
  let id = event.target.dataset.id;
  document.getElementById("deleteBtn").setAttribute("data-id", id);
};

document.querySelectorAll(".deleteModalBtn").forEach((button) => button.addEventListener("click", setDataId));
document.getElementById("deleteBtn").addEventListener("click", deletePost);
