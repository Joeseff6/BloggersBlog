const router = require("express").Router();
const { User, Post, Comments } = require(`../models`);
const loggedIn = require(`../utils/loggedIn`);
const signedOut = require(`../utils/signedOut`);

router.get(`/`, loggedIn, async (req, res) => {
  res.render(`homepage`, {
    loggedIn: req.session.loggedIn,
  });
});

router.get(`/login`, async (req, res) => {
  res.render(`login`);
});

router.get(`/newUser`, async (req, res) => {
  res.render(`newUser`);
});

router.get(`/posts`, signedOut, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: {
        model: User,
        attributes: [`username`],
      },
    });
    const posts = postData.map((post) => {
      return post.get({ plain: true });
    });
    const userData = await User.findByPk(req.session.userId, {
      attributes: [`id`],
    });
    const user = userData.get({ plain: true });
    res.render(`posts`, {
      posts,
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get(`/posts/:id`, signedOut, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [`username`],
        },
        {
          model: Comments,
          include: [
            {
              model: User,
              attributes: [`username`],
            },
          ],
        },
      ],
    });
    const posts = postData.get({ plain: true });
    const userData = await User.findByPk(req.session.userId, {
      attributes: [`id`],
    });
    const user = userData.get({ plain: true });
    res.render(`view`, { posts, user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get(`/dashboard/:id`, signedOut, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: [`id`, `username`],
      include: [
        {
          model: Post,
        },
      ],
    });
    const user = userData.get({ plain: true });
    res.render(`dashboard`, { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get(`/newPost`, signedOut, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: [`id`],
    });
    const user = userData.get({ plain: true });
    res.render(`newPost`, { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get(`/editPost/:id`, signedOut, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: [`id`],
    });
    const user = userData.get({ plain: true });
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });
    res.render(`editPost`, { user, post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
