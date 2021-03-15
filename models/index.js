const User = require(`./User`);
const Post = require(`./Post`);
const Comments = require(`./Comments`);

User.hasMany(Post, {
    foreignKey: `user_id`
});

Comments.belongsTo(User, {
    foreignKey: `user_id`
});

Comments.belongsTo(Post, {
    foreignKey: `text`
});

module.exports = { User, Post, Comments };