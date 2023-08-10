const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      //defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      // type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4, 
      // allowNull: false,
      // primaryKey: true,
    },
    title: { // Cambiar 'name' por 'title'
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {timestamps: false});
};
