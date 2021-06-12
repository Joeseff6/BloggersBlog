const { Comments } = require("../models");

const commentSeeds = [
  {
    id: 1,
    comment: "This is the first comment",
    post_id: 1,
    user_id: 1,
  }
];

const seedComments = async() => {
  await Comments.bulkCreate(commentSeeds);
}

module.exports = seedComments;