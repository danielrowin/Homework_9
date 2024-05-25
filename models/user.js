module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING
    });
  };
  