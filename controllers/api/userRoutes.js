const router = require(`express`).Router();
const { User, Post, Comments } = require(`../../models`);
const date = new Date();
const today =
  `${date.getMonth() + 1}` +
  `/` +
  `${date.getDate()}` +
  `/` +
  `${date.getFullYear()}`;

router.post(`/`, async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.userId = userData.dataValues.id;
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    req.session.userId = userData.dataValues.id;

    if (!userData) {
      res
        .status(400)
        .json({
          message: "User not found! Please check your email or password.",
        });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Create new post
router.post(`/newPost`, (req, res) => {
  try {
    const postData = Post.create({
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

// Create new comment
router.post(`/newComment`, async (req, res) => {
  try {
    const commentData = await Comments.create({
      date: today,
      comment: req.body.comment,
      user_id: req.session.userId,
      post_id: req.session.postId,
    });

    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
