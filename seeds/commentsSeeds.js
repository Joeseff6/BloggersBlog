const { Comments } = require("../models");

const commentSeeds = [
  {
    id: 1,
    comment: "This is the first comment",
    post_id: 1,
    user_id: 2,
  },
  {
    id: 2,
    comment: "This is the the following comment",
    post_id: 1,
    user_id: 1,
  },
  {
    id: 3,
    comment: "We the best!",
    post_id: 2,
    user_id: 2,
  },
  {
    id: 4,
    comment: "What's your favorite DJ Khaled song?",
    post_id: 2,
    user_id: 1,
  },
  {
    id: 5,
    comment: "Yup it's a work in progress for sure.",
    post_id: 3,
    user_id: 1,
  },
];

const seedComments = async() => {
  await Comments.bulkCreate(commentSeeds);
}

module.exports = seedComments;