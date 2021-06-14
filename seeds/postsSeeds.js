const { Post } = require("../models");

const postSeed = [
  {
    id: 1,
    title: "First post!",
    text: "This is the first post.",
    user_id: 1,
  },
  {
    id: 2,
    title: "Another one",
    text: "Quoted from DJ Khaled.",
    user_id: 1,
  },
  {
    id: 3,
    title: "Checking out the site",
    text: "Looks like this website is still in progress.",
    user_id: 2,
  },
];

const seedPosts = async() => {
  await Post.bulkCreate(postSeed);
}

module.exports = seedPosts;