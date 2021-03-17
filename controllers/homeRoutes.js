const router = require('express').Router();

router.get(`/`, async (req,res) => {
    res.render(`homepage`)
})

router.get(`/login`, async (req,res) => {
    res.render(`login`)
})

router.get(`/newUser`, async (req,res) => {
    res.render(`newUser`)
})



module.exports = router;
