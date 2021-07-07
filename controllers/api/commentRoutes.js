const router = require(`express`).Router();
const { Comments } = require(`../../models`);

// Create new comment
router.post(`/`, async (req, res) => {
  try {
    const commentData = await Comments.create({
      comment: req.body.comment,
      user_id: req.session.userId,
      post_id: req.body.postId,
    });
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
