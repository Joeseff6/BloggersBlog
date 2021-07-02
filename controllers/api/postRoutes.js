const router = require(`express`).Router();
const { Post } = require(`../../models`);
const date = new Date();
const today =
`${date.getMonth() + 1}` +
`/` +
`${date.getDate()}` +
`/` +
`${date.getFullYear()}`;

// Create new post
router.post(`/`, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      text: req.body.text,
      posted_date: today,
      user_id: req.session.userId,
    });
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete post
router.delete(`/`, async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json("Post deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;