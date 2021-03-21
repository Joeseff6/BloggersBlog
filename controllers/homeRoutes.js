const router = require('express').Router();
const { User, Post } = require(`../models`)

router.get(`/`, async (req,res) => {
    console.log(req.session)
    if (req.session.loggedIn) {
        res.render(`posts`)
    } else {
        res.render(`homepage`, {
            loggedIn: req.session.loggedIn
        })
    }
})

router.get(`/login`, async (req,res) => {
        res.render(`login`)
})

router.get(`/newUser`, async (req,res) => {
    res.render(`newUser`)
})

router.get(`/posts`, async (req,res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: [`username`],
                },
            ],
        })
        const posts = postData.map(post => {
            return post.get({plain: true})
        })
        console.log(posts)
        res.render(`posts`, {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get(`/newPost`, async (req,res) => {
    res.render(`newPost`)
})



module.exports = router;
