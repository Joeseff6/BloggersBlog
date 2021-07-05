const handleSubmit = async (event) => {
  event.preventDefault();
  const urlArr = window.location.pathname.split("/");
  const postId = urlArr[urlArr.length - 1];
  const newText = document.getElementById(`postText`).value;
  const response = await fetch(`/api/posts/` + postId, {
    method: `PUT`,
    body: JSON.stringify({ newText }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/posts/" + postId);
  }
};

document.getElementById(`editForm`).addEventListener(`submit`, handleSubmit);
