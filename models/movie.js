module.exports = (sequelize, DataTypes) => {
    return sequelize.define('movies', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      title: DataTypes.STRING,
      genres: DataTypes.STRING,
      year: DataTypes.STRING
    });
  };