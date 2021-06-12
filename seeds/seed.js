const sequelize = require("../config/connection");

const seedUsers = require("./usersSeeds");
const seedPosts = require("./postsSeeds");
const seedComments = require("./commentsSeeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedAll();