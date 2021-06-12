const { Post } = require("../models");

const postSeed = [
  {
    id: 1,
    title: "First post!",
    text: "This is the first post",
    user_id: 1,
  }
];

const seedPosts = async() => {
  await Post.bulkCreate(postSeed);
}

module.exports = seedPosts;