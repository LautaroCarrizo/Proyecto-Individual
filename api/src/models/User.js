const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Agrega esta línea para generar automáticamente un UUID para el campo "id"
        allowNull: false, // Agrega esta línea para evitar valores nulos
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        isEmail: true
      },
    },
    { timestamps: false }
  );

};
