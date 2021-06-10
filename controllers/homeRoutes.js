const router = require("express").Router();
const { User, Post, Comments } = require(`../models`);
const loggedIn = require(`../utils/loggedIn`);
const signedOut = require(`../utils/signedOut`);


router.get(`/`, async (req, res) => {
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

router.get(`/posts`, loggedIn, async (req, res) => {
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
      res.render(`posts`, {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get(`/posts/:id`, async (req, res) => {
  try {
    req.session.postId = req.params.id;
    if (!req.session.loggedIn) {
      res.render(`notLogged`);
    } else {
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
      console.log(posts);
      res.render(`view`, { posts, loggedIn: req.session.loggedIn });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get(`/newPost`, async (req, res) => {
  try {
    res.render(`newPost`, { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
