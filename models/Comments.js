const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");
const date = new Date();
const today =
`${date.getMonth() + 1}` +
`/` +
`${date.getDate()}` +
`/` +
`${date.getFullYear()}`;

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `post`,
        key: `id`,
      },
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
    modelName: "comments",
  }
);

module.exports = Comments;
