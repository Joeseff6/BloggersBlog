const router = require(`express`).Router();
const {User} = require(`../../models`);

router.get('/', (req,res) => {
})

router.post(`/`, async (req,res) => {
    try {
        const userData = await User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            req.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;