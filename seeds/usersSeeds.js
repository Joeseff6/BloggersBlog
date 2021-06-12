const { User } = require("../models");

const usersSeed = [
  {
    id: 1,
    username: "joeseff",
    email: "email@email.com",
    password: "password",
    date_created: "1/1/2021",
  }
];

const seedUsers = async() => {
  await User.bulkCreate(usersSeed);
}

module.exports = seedUsers;