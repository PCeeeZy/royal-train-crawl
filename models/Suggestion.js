const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Suggestion extends Model {}

Suggestion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    suggestion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'suggestion',
  }
);

module.exports = Suggestion;
