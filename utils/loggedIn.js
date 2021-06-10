const loggedIn = (req, res, next) => {
    if (req.session.loggedIn) {
        res.redirect('/posts');
    } else {
        next();
    };
};

module.exports = loggedIn;