const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);
const date = new Date();
const today =
`${date.getMonth() + 1}` +
`/` +
`${date.getDate()}` +
`/` +
`${date.getFullYear()}`;

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `user`,
        key: `id`,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
